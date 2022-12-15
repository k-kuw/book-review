import { memo } from "react";
import { useForm } from "react-hook-form";
import type { SignIn } from "../../types";


// 登録orログインform Component
const UserForm = memo(({ onSubmit}: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignIn>();

  return (
    <>
  {/* props.onSubmitにてボタンを押した際の処理を取得(ユーザー登録時とログイン時で別処理) */}
      <form
        onSubmit={handleSubmit((data: SignIn) => {
          onSubmit(data);
        })}
      >
        {/* ユーザー登録時のみユーザーネームの入力 */}
        {window.location.href === "http://localhost:3000/register" && (
          <>
            <label>ユーザーネーム</label>
            <input
              id="displayName"
              {...register("displayName", {
                required: "入力してください",
              })}
            />
          </>
        )}
        <label>メールアドレス</label>
        <input
          id="email"
          {...register("email", {
            required: "入力してください",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "無効なアドレスです",
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <label>パスワード</label>
        <input
          id="password"
          {...register("password", {
            required: "入力してください",
            minLength: {
              value: 6,
              message: "6文字以上必須",
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <button>登録</button>
      </form>
    </>
  );
});

export default UserForm;
