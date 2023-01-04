import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import UserForm from "../molecules/UserForm";
import { auth } from "../../firebase";
import { ReactNode } from "react";
import type { SignIn } from "../../types";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { useNavigate } from "react-router";


// Loginページのtemplate
const LoginLayout = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate()
  const userLogin = (data: SignIn) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        navigate('/')
      })
      .catch(() => {
        window.alert("失敗しました。既に登録されているメールアドレスの可能性があるため、別のメールアドレスをご使用ください。")
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
