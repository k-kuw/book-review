import { useContext } from "react";
import { Link } from "react-router-dom";
import { Book } from "../../types";
import { BookInfo } from "../pages/BookList";

// 本リストComponent
const BookListDisplay = () => {
  // 検索後の本リスト取得
  const bookList: Book[] | string = useContext(BookInfo);

  // 本の説明が長い場合省略する処理
  const CutDiscription = (discription: string) => {
    if (discription && discription.length > 150) {
      const _cutDiscription = discription.substring(0, 150) + "...";
      return _cutDiscription;
    } else return discription;
  };

  return (
    <>
      <ul className="pb-5">
        {Array.isArray(bookList) &&
          bookList.map((info: Book) => {
            console.log("info", info);
            return (
              <li key={info.id} className="border-2 border-black sm:mx-5 md:mx-10 lg:mx-20 mt-10 bg-amber-500">
                <div className="flex relative h-40">
                  {info.volumeInfo.imageLinks ? (
                    <img
                      src={info.volumeInfo.imageLinks.smallThumbnail}
                      alt={info.volumeInfo.title}
                      width={120}
                      className="object-contain p-3" 
                    />

                  ) : (
       
                    <img
                      src={`${process.env.PUBLIC_URL}/bookIcon.jpg`}
                      alt="aaa"
                      width={120}
                      className="object-contain p-3"
                    />
      
                  )}
                  <div>
                    <Link
                      to={`/book-review/${info.id}`}
                      state={{ state: info }}
                      className="text-lg font-semibold underline"
                    >
                      {info.volumeInfo.title} {info.volumeInfo.subtitle && `-${info.volumeInfo.subtitle}-`}
                    </Link>

                    <p> {CutDiscription(info.volumeInfo.description)}</p>
                    <p className="absolute bottom-0 right-0">
                      {" "}
                      出版月：{info.volumeInfo.publishedDate.replace(/-/g,'/')}　ページ数：
                      {info.volumeInfo.pageCount}ページ
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default BookListDisplay;
