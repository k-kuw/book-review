import axios from "axios";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useLayoutEffect,
  useState,
} from "react";
import type { Book } from "../../types";
import BookListDisplay from "../organisms/BookListDisplay";
import BookListLayout from "../templates/BookListLayout";

export const BookInfo = createContext<Book[]>([]);
export const BookName = createContext<Dispatch<SetStateAction<string>> | null>(
  null
);

// BookListページ
const BookList = () => {
  // api情報格納用state
  const [bookInfo, setBookInfo] = useState<Book[]>([]);

  // 検索名格納用state
  const [bookName, setBookName] = useState<string>("one piece");

  // Google Books API 情報取得
  useLayoutEffect(() => {
    const searchBookInfo = async () => {
      const _searchBookInfo = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${bookName}&maxResults=10&langRestrict=ja&orderBy=relevance&printType=books`
      );
      console.log("serch", _searchBookInfo.data.items);
      setBookInfo(_searchBookInfo.data.items);
    };
    searchBookInfo();
  }, [bookName]);

  return (
    // SearchForm Component(->BookList Component)から検索名を取得するためにset関数を渡す
    <BookName.Provider value={setBookName}>
      <BookListLayout>
        {/* 取得した本情報を共有する */}
        <BookInfo.Provider value={bookInfo}>
          <BookListDisplay />
        </BookInfo.Provider>
      </BookListLayout>
    </BookName.Provider>
  );
};

export default BookList;
