import BookReviewLayout from "../templates/BookReviewLayout";
import BookDescription from "../organisms/BookDescription";

// BookReviewページ
const BookReview = () => {
  return (
    <BookReviewLayout>
      <p>BookReview</p>
      <BookDescription />
    </BookReviewLayout>
  );
};

export default BookReview;
