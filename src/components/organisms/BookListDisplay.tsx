import { useContext } from "react";
import { Link } from "react-router-dom";
import { Book } from "../../types";
import { BookInfo } from "../pages/BookList";

// 本リストComponent
const BookListDisplay = () => {
  // 検索後の本リスト取得
  const bookList: Book[] | string = useContext(BookInfo);

  return (
    <>
      <ul>
        {Array.isArray(bookList) &&
          bookList.map((info: Book) => {
            console.log("info", info);
            return (
              <li key={info.id}>
                <div>
                  <Link to={`/book-review/${info.id}`} state={{ state: info }}>
                    {info.volumeInfo.title} -{info.volumeInfo.subtitle}-
                  </Link>
                  <p> {info.volumeInfo.publishedDate}</p>
                  <p> {info.volumeInfo.description}</p>
                  <p> {info.volumeInfo.pageCount}</p>
                  {info.volumeInfo.imageLinks ? (
                    <img
                      src={info.volumeInfo.imageLinks.smallThumbnail}
                      alt={info.volumeInfo.title}
                    />
                  ) : (
                    <img
                      src={`${process.env.PUBLIC_URL}/bookIcon.jpg`}
                      alt="aaa"
                      width="128"
                    />
                  )}
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default BookListDisplay;
