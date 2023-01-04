import { memo, useContext } from "react";
import { Link } from "react-router-dom";
import { Book } from "../../types";
import { BookInfo } from "../pages/BookList";
import useMedia from "use-media";

// 本リストComponent
const BookListDisplay = memo(() => {
  // 検索後の本リスト取得
  const bookList: Book[] | string = useContext(BookInfo);

  // 本の説明が長い場合省略する処理
  const maxWidth = useMedia({ minWidth: "1300px" });
  const medWidth = useMedia({ minWidth: "970px" });
  const minWidth = useMedia({ minWidth: "600px" });

  // 1300 970 600
  // 350 250 150   80
  const CutDiscription = (discription: string) => {
    if (discription) {
      if (maxWidth) {
        if (discription.length > 350) {
          const _cutDiscription = discription.substring(0, 350) + "...";
          return _cutDiscription;
        } else return discription;
      } else if (medWidth) {
        if (discription.length > 250) {
          const _cutDiscription = discription.substring(0, 250) + "...";
          return _cutDiscription;
        } else return discription;
      } else if (minWidth) {
        if (discription.length > 150) {
          const _cutDiscription = discription.substring(0, 150) + "...";
          return _cutDiscription;
        } else return discription;
      } else {
        if (discription.length > 80) {
          const _cutDiscription = discription.substring(0, 80) + "...";
          return _cutDiscription;
        } else return discription;
      }
    } else {
      return "説明なし";
    }
  };

  return (
    <>
      <ul className="pb-5">
        {Array.isArray(bookList) &&
          bookList.map((info: Book) => {
            return (
              <li
                key={info.id}
                className="border-2 border-black sm:mx-5 md:mx-10 lg:mx-20 mt-10 bg-amber-500"
              >
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
                      {info.volumeInfo.title}{" "}
                      {info.volumeInfo.subtitle &&
                        `-${info.volumeInfo.subtitle}-`}
                    </Link>

                    <p> {CutDiscription(info.volumeInfo.description)}</p>
                    <p className="absolute bottom-0 right-0">
                      {" "}
                      出版日：{info.volumeInfo.publishedDate.replace(/-/g, "/")}
                      　ページ数：
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
});

export default BookListDisplay;
