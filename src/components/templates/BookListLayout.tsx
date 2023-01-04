import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import SearchForm from "../molecules/SearchForm";
import { ReactNode } from "react";

// BookListページのtemplate
const BookListLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <div className="booklist-photo">
      <div className="translucent">
      <SearchForm />
      {children}
      </div>
      </div>
      <Footer />
    </>
  );
};

export default BookListLayout;
