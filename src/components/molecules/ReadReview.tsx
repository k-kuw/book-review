import { db } from "../../firebase";
import {
  collection,
  limit,
  onSnapshot,
  query,
  Timestamp,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// reviewの型定義
interface Review {
  review: string;
  id: string;
  dateTime: Timestamp;
}

const ReadReview = () => {
  // BookListページから渡ってくるstate取得
  const { state } = useLocation();

  // 本のtitleが長いためtitle定義
  const title = `${state.state.volumeInfo.title} -${state.state.volumeInfo.subtitle}-`;

  // firestoreからのreviews格納用state
  // TODO 型定義
  const [reviews, setReviews]: any = useState([]);

  // firestoreからのreviews取得
  useEffect(() => {
    const reviewsCollectionRef = collection(db, "reviews", title, title);
    // reviewを3件取得
    const limitedReviewsCollectionRef = query(reviewsCollectionRef, limit(3));
    onSnapshot(limitedReviewsCollectionRef, (querySnapshot) => {
      setReviews(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, [title]);

  return (
    <>
      <div className="mt-10 sm:mx-5 md:mx-10 lg:mx-20">
        <h2 className="text-2xl font-bold text-amber-500 shadow mb-3 border-b-2 border-gray-700">レビュー</h2>
        <ul className="mx-10">
        {reviews.map((review: Review) => {
          console.log("review", review);
          return (
            <li key={review.id}>
            <div className="border-2 border-black mb-3 text-white shadow">
              <p className="text-lg">レビュー：{review.review}</p>
              <p className="text-sm">ユーザーネーム：{review.id}さん</p>
              {review.dateTime && (
                <p className="text-sm">投稿日：{`${review.dateTime.toDate()}`}</p>
              )}
            </div>
            </li>
          );
        })}
        </ul>
      </div>
    </>
  );
};

export default ReadReview;
