import { memo } from "react";
import LoginLayout from "../templates/LoginLayout";

// Loginページ
const Login = memo(() => {
  return (
    <LoginLayout>
       <p className="text-2xl font-bold text-amber-500 shadow border-b-2 border-gray-700 sm:mx-5 md:mx-10 lg:mx-20 pt-10">Login</p>
    </LoginLayout>
  );
});

export default Login;
