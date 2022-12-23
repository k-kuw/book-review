import { useLocation } from "react-router-dom";

// 本の説明Component
const BookDescription = () => {
  // BookListページから渡ってくるstate取得
  const { state } = useLocation();

  return (
    <div className="pt-5">
      {state ? (
        <div className="flex relative h-40 border-2 border-black sm:mx-5 md:mx-10 lg:mx-20 bg-amber-500">
          {state.state.volumeInfo.imageLinks ? (
            <img
              src={state.state.volumeInfo.imageLinks.smallThumbnail}
              alt={state.state.volumeInfo.title}
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
          <p>
            {state.state.volumeInfo.title} -{state.state.volumeInfo.subtitle}-
          </p>
          <p> {state.state.volumeInfo.description}</p>
          <p className="absolute bottom-0 right-0">
                      {" "}
                      出版月：{state.state.volumeInfo.publishedDate}　ページ数：
                      {state.state.volumeInfo.pageCount}ページ
                    </p>
          </div>
        </div>
      ) : (
        <p>なし</p>
      )}
    </div>
  );
};

export default BookDescription;
