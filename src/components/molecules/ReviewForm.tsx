import { db } from "../../firebase";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useContext } from "react";
import { AuthContext } from "../../authcontext/authContext";

type Input = {
  myReview: string;
};

const ReviewForm = () => {
  // BookListページから渡ってくるstate取得
  const { state } = useLocation();

  // ログイン情報の取得
  const userInfo: firebase.default.User | null = useContext(AuthContext);

  // react-hook-form使用
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();

  // reviewをfirestoreへ送信する関数
  const reviewSubmit = (myReviewData: { myReview: string }) => {
    console.log("data", myReviewData);
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
      console.log("ref", reviewDocmentRef);
      setDoc(reviewDocmentRef, {
        review: myReviewData.myReview,
        dateTime: serverTimestamp(),
      });
    }
  };

  return (
    <>
      <p>review form</p>
      <form onSubmit={handleSubmit((data) => reviewSubmit(data))}>
        <textarea
          id="myReview"
          rows={5}
          cols={50}
          {...register("myReview", {
            required: "入力してください",
            maxLength: { value: 250, message: "文字数が多いです" },
          })}
        />
        {errors.myReview && <p>{errors.myReview.message}</p>}
        <button>button</button>
      </form>
    </>
  );
};

export default ReviewForm;
