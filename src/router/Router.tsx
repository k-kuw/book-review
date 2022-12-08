import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookList from "../components/pages/BookList";
import BookReview from "../components/pages/BookReview";
import Login from "../components/pages/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book-review" element={<BookReview />}>
          <Route path=":title" element={<BookReview />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
