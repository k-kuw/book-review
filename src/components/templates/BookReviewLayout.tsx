import { memo, ReactNode } from "react";
import ReadReview from "../molecules/ReadReview";
import ReviewForm from "../molecules/ReviewForm";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";

// BookReviewページのtemplate
const BookReviewLayout = memo(({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="bookreview-photo h-screen">
      <div className="translucent h-screen">
      {children}
      <ReadReview />
      <ReviewForm />
      </div>
      </div>
      <Footer />
    </div>
  );
});

export default BookReviewLayout;
