import { auth } from "../../firebase";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import UserForm from "../molecules/UserForm";
import { memo, ReactNode } from "react";
import type { SignIn } from "../../types";

// Registerページのtemplate
const RegisterLayout = memo(({ children }: { children: ReactNode }) => {
  const userRegister = (data: SignIn) => {
    console.log("display", data.displayName);
    auth
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((userCredential) => {
        userCredential.user?.updateProfile({
          displayName: data.displayName,
        });
        console.log("登録成功", data.displayName);
      })
      .catch(() => {
        console.log("失敗");
      });
  };

  return (
    <>
      <Header />
      <UserForm onSubmit={userRegister} />
      {children}
      <Footer />
    </>
  );
});

export default RegisterLayout;
