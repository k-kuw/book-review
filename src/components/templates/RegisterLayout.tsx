import { auth } from "../../firebase";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import UserForm from "../molecules/UserForm";
import { memo, ReactNode } from "react";
import type { SignIn } from "../../types";
import { createUserWithEmailAndPassword, updateProfile } from "@firebase/auth";

// Registerページのtemplate
const RegisterLayout = memo(({ children }: { children: ReactNode }) => {
  const userRegister = (data: SignIn) => {
    console.log("display", data.displayName);
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        if (auth.currentUser) {
          updateProfile(auth.currentUser, {
            displayName: data.displayName,
          });
        }
        console.log("登録成功", data.displayName);
      })
      .catch(() => {
        console.log("失敗");
      });
  };

  return (
    <>
      <Header />
      <div className="register-photo">
      <div className="translucent h-screen">
      {children}
      <UserForm onSubmit={userRegister} />
      </div>
      </div>
      <Footer />
    </>
  );
});

export default RegisterLayout;
