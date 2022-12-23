import { useContext } from "react";
import { AuthContext } from "../../authcontext/authContext";
import { auth } from "../../firebase";

// HeaderのログインログアウトComponent
const HeaderLogin = () => {
  // ログイン情報の取得
  const signIn: firebase.default.User | null = useContext(AuthContext);
  console.log("sign", signIn);

  // ログアウト関数
  const logout = () => {
    auth
      .signOut()
      .then(() => {
        console.log("ログアウト成功");
      })
      .catch(() => {
        console.log("失敗");
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
};

export default HeaderLogin;
