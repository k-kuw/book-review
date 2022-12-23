import { memo } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import type { SignIn } from "../../types";
import ClickButton from "../atoms/ClickButton";

// 登録orログインform Component
const UserForm = memo(({ onSubmit }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignIn>();

  const navigate = useNavigate();

  return (
    <>
      {/* props.onSubmitにてボタンを押した際の処理を取得(ユーザー登録時とログイン時で別処理) */}
      <form
        onSubmit={handleSubmit((data: SignIn) => {
          onSubmit(data);
          navigate("/");
        })}
        className="ml-10 mt-8"
      >
        {/* ユーザー登録時のみユーザーネームの入力 */}
        {window.location.href === "http://localhost:3000/register" && (
          <>
            <label htmlFor="displayName" className="text-lg shadow text-white">
              ユーザーネーム
            </label>
            <input
              id="displayName"
              {...register("displayName", {
                required: "入力してください",
              })}
              className="block border-2 rounded w-1/3 text-gray-700d focus:outline-none focus:border-amber-500 mb-3"
            />
          </>
        )}
        <label htmlFor="email" className="text-lg shadow text-white">
          メールアドレス
        </label>
        <input
          id="email"
          {...register("email", {
            required: "入力してください",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "無効なアドレスです",
            },
          })}
          className="block border-2 rounded w-1/3 text-gray-700d focus:outline-none focus:border-amber-500 mb-3"
        />
        {errors.email && <p>{errors.email.message}</p>}
        <label htmlFor="password" className="text-lg shadow text-white">
          パスワード
        </label>
        <input
          id="password"
          {...register("password", {
            required: "入力してください",
            minLength: {
              value: 6,
              message: "6文字以上必須",
            },
          })}
          className="block border-2 rounded w-1/3 text-gray-700d focus:outline-none focus:border-amber-500 mb-3"
        />
        {errors.password && <p>{errors.password.message}</p>}
        {window.location.href === "http://localhost:3000/register" ? (
          <ClickButton>登録</ClickButton>
        ) : (
          <ClickButton>ログイン</ClickButton>
        )}
      </form>
    </>
  );
});

export default UserForm;
