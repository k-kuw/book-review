import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import UserForm from "../molecules/UserForm";
import { auth } from "../../firebase";
import { ReactNode } from "react";
import type { SignIn } from "../../types";

// Loginページのtemplate
const LoginLayout = ({ children }: { children: ReactNode }) => {
  const userLogin = (data: SignIn) => {
    auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then(() => {
        console.log("ログイン成功");
      })
      .catch(() => {
        console.log("失敗");
      });
  };
  return (
    <>
      <Header />
      <UserForm onSubmit={userLogin} />
      {children}
      <Footer />
    </>
  );
};

export default LoginLayout;
