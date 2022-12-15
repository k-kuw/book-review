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
      <p>ReadReview</p>
      <div>
        {reviews.map((review: Review) => {
          console.log("review", review);
          return (
            <div key={review.id}>
              <p>レビュー：{review.review}</p>
              <p>ユーザーネーム：{review.id}さん</p>
              {review.dateTime && (
                <p>レビュー日：{`${review.dateTime.toDate()}`}</p>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ReadReview;
