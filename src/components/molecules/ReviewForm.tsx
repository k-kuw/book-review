import { db } from "../../firebase";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { memo, useContext } from "react";
import { AuthContext } from "../../authcontext/authContext";
import ClickButton from "../atoms/ClickButton";
import { User } from "@firebase/auth";

type Input = {
  myReview: string;
};

const ReviewForm = memo(() => {
  // BookListページから渡ってくるstate取得
  const { state } = useLocation();

  // ログイン情報の取得
  const userInfo: User | null = useContext(AuthContext);

  // react-hook-form使用
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();

  // reviewをfirestoreへ送信する関数
  const reviewSubmit = (myReviewData: { myReview: string }) => {
    // userInfoがある(ログイン状態)の場合
    if (userInfo) {
      // 本のtitleが長いためtitle定義
      const title = `${state.state.volumeInfo.title} -${state.state.volumeInfo.subtitle}-`;
      const reviewDocmentRef = doc(
        // TODO db型要確認
        // @ts-ignore
        db,
        "reviews",
        title,
        title,
        userInfo.displayName
      );
      setDoc(reviewDocmentRef, {
        review: myReviewData.myReview,
        dateTime: serverTimestamp(),
      });
    }
  };

  return (
    <div className="mt-10 sm:mx-5 md:mx-10 lg:mx-20">
      {userInfo && (
        <>
          <h2 className="text-2xl font-bold text-amber-500 shadow border-b-2 border-gray-700">
            レビューを投稿しよう！
          </h2>
          <form
            onSubmit={handleSubmit((data) => reviewSubmit(data))}
            className="mt-5 pb-5 sm:mx-5 md:mx-10 lg:mx-20"
          >
            <textarea
              id="myReview"
              rows={5}
              cols={50}
              {...register("myReview", {
                required: "入力してください",
                maxLength: { value: 250, message: "文字数が多いです" },
              })}
              className="border-2 rounded w-1/2 text-gray-700 focus:outline-none focus:border-amber-500 mx-10"
            />
            {errors.myReview && <p className="font-bold text-amber-200 shadow ml-10">{errors.myReview.message}</p>}
            <ClickButton>投稿</ClickButton>
          </form>
        </>
      )}
      <br />
      <p className="text-white pb-5">※ログインするとレビューを投稿できます</p>
    </div>
  );
});

export default ReviewForm;
