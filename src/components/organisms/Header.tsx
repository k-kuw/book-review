import HeaderLink from "../atoms/HeaderLink";

const Header = () => {
  return (
    <>
      <header>
        <h1>book-review</h1>
        <nav>
          <ul>
            <li>
              <HeaderLink linkTo="/">BookList</HeaderLink>
            </li>
            <li>
              <HeaderLink linkTo="/book-review">BookReview</HeaderLink>
            </li>
            <li>
              <HeaderLink linkTo="/login">Login</HeaderLink>
            </li>
          </ul>
        </nav>
      </header>
      <hr />
    </>
  );
};

export default Header;
