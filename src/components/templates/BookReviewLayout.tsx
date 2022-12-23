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
      <div className="bookreview-photo">
      <div className="translucent">
      {children}
      <ReadReview />
      <ReviewForm />
      </div>
      </div>
      <Footer />
    </>
  );
};

export default BookReviewLayout;
