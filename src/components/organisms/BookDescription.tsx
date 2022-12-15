import { useLocation } from "react-router-dom";

// 本の説明Component
const BookDescription = () => {
  // BookListページから渡ってくるstate取得
  const { state } = useLocation();

  return (
    <>
      {state ? (
        <div>
          <p>
            {state.state.volumeInfo.title} -{state.state.volumeInfo.subtitle}-
          </p>
          <p> {state.state.volumeInfo.publishedDate}</p>
          <p> {state.state.volumeInfo.description}</p>
          <p> {state.state.volumeInfo.pageCount}</p>
          {state.state.volumeInfo.imageLinks ? (
            <img
              src={state.state.volumeInfo.imageLinks.smallThumbnail}
              alt={state.state.volumeInfo.title}
            />
          ) : (
            <img
              src={`${process.env.PUBLIC_URL}/bookIcon.jpg`}
              alt="aaa"
              width="128"
            />
          )}
        </div>
      ) : (
        <p>なし</p>
      )}
    </>
  );
};

export default BookDescription;
