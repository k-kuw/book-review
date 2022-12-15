import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookList from "../components/pages/BookList";
import BookReview from "../components/pages/BookReview";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import AuthProvider from "../authcontext/authContext";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AuthProvider>
              <BookList />
            </AuthProvider>
          }
        />
        <Route
          path="/register"
          element={
            <AuthProvider>
              <Register />{" "}
            </AuthProvider>
          }
        />
        <Route
          path="/login"
          element={
            <AuthProvider>
              <Login />{" "}
            </AuthProvider>
          }
        />
        <Route
          path="/book-review"
          element={
            <AuthProvider>
              <BookReview />
            </AuthProvider>
          }
        >
          <Route path=":title" element={<BookReview />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
