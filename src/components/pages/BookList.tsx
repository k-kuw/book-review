import axios from "axios";
import { createContext, useLayoutEffect, useState } from "react";
import BookListDisplay from "../organisms/BookListDisplay";
import BookListLayout from "../templetes/BookListLayout";

export const BookInfo = createContext<any>([]);
export const BookName = createContext<any>("");

const BookList = () => {
  const [bookInfo, setBookInfo] = useState("");
  const [bookName, setBookName] = useState("one piece");

  useLayoutEffect(() => {
    const searchBookInfo = async () => {
      const _searchBookInfo = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${bookName}&maxResults=10`
      );
      console.log(_searchBookInfo.data.items);
      setBookInfo(_searchBookInfo.data.items);
    };
    searchBookInfo();
  }, [bookName]);

  return (
    <BookName.Provider value={setBookName}>
    <BookListLayout>
      <p>BookList</p>
        <BookInfo.Provider value={bookInfo}>
          <BookListDisplay />
        </BookInfo.Provider>
    </BookListLayout>
    </BookName.Provider>

  );
};

export default BookList;
