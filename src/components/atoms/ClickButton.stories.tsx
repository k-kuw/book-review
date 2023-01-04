import "../../index.css"
import ClickButton from "./ClickButton";

export default {
  title: "Common/Click Button",
  component: ClickButton,
};

export const LoginButton = ()=> <ClickButton>ログイン</ClickButton>

export const RegisterButton = ()=> <ClickButton>登録</ClickButton>
