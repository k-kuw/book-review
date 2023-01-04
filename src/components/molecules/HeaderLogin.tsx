import { signOut, User } from "@firebase/auth";
import { memo, useContext } from "react";
import { AuthContext } from "../../authcontext/authContext";
import { auth } from "../../firebase";

// HeaderのログインログアウトComponent
const HeaderLogin = memo(() => {
  // ログイン情報の取得
  const signIn: User | null = useContext(AuthContext);

  // ログアウト関数
  const logout = () => {
    signOut(auth)
      .then(() => {
        window.location.reload();
      })
      .catch(() => {
      });
  };
  return (
    <>
      {signIn && (
        <>
          <li className="ml-2">
            <button onClick={logout}>ログアウト</button>
          </li>
          <li className="ml-2">
            <p>ログイン中{signIn.displayName && `：${signIn.displayName}様`}</p>
          </li>
        </>
      )}
    </>
  );
});

export default HeaderLogin;
