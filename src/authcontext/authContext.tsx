import { User } from "firebase/auth";
import { createContext, ReactNode, useEffect, useState } from "react";
import { auth } from "../firebase";

// ログインユーザー情報の状態管理Context
export const AuthContext = createContext<User | null>(null);

// ログインユーザー情報の状態管理Component(各ページに使用)
const AuthProvider = ({ children }: { children: ReactNode }) => {
  // ユーザー情報格納state
  const [user, setUser] = useState<User | null>(null);
  // ログイン状況監視、ユーザー情報取得
  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      }
    });
    return () => {
      unsubscribed();
    };
  }, []);
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
