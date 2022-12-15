import { ReactNode } from "react";
import ReadReview from "../molecules/ReadReview";
import ReviewForm from "../molecules/ReviewForm";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";

// BookReviewページのtemplate
const BookReviewLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <ReadReview />
      <ReviewForm />
      <Footer />
    </>
  );
};

export default BookReviewLayout;