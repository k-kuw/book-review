import { useContext } from "react";
import { Link } from "react-router-dom";
import { TypeBookInfo } from "../../types";
import { BookInfo } from "../pages/BookList";


const BookListDisplay = () => {
  const bookList: TypeBookInfo[] | string = useContext(BookInfo);

  return (
    <>
      <ul>
        {Array.isArray(bookList) &&
          bookList.map((info: any) => (
            <li key={info.id}>
              <div>
                <Link to={`/book-review/${info.id}`} state={{state: info}}>
                  {info.volumeInfo.title}
                  {" "}
                  -{info.volumeInfo.subtitle}-
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
          ))}
      </ul>
    </>
  );
};

export default BookListDisplay;
