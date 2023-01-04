import BookReviewLayout from "../templates/BookReviewLayout";
import BookDescription from "../organisms/BookDescription";
import { memo } from "react";

// BookReviewページ
const BookReview = memo(() => {
  return (
    <BookReviewLayout>
      <BookDescription />
    </BookReviewLayout>
  );
});

export default BookReview;
