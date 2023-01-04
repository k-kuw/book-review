import { auth } from "../../firebase";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import UserForm from "../molecules/UserForm";
import { memo, ReactNode } from "react";
import type { SignIn } from "../../types";
import { createUserWithEmailAndPassword, updateProfile } from "@firebase/auth";
import { useNavigate } from "react-router";

// Registerページのtemplate
const RegisterLayout = memo(({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const userRegister = (data: SignIn) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        if (auth.currentUser) {
          updateProfile(auth.currentUser, {
            displayName: data.displayName,
          });
        }
        navigate("/");
      })
      .catch(() => {});
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
