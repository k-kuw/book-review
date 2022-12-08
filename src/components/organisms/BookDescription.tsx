import { useLocation } from "react-router-dom";

const BookDescription = () => {
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
