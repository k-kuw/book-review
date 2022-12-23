import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import UserForm from "../molecules/UserForm";
import { auth } from "../../firebase";
import { ReactNode } from "react";
import type { SignIn } from "../../types";
import { signInWithEmailAndPassword } from "@firebase/auth";

// Loginページのtemplate
const LoginLayout = ({ children }: { children: ReactNode }) => {
  const userLogin = (data: SignIn) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
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
      <div className="login-photo">
      <div className="translucent h-screen">
      {children}
      <UserForm onSubmit={userLogin} />
      </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginLayout;
