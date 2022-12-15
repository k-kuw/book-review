import HeaderLink from "../atoms/HeaderLink";
import HeaderLogin from "../molecules/HeaderLogin";

// Header Component
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
              <HeaderLink linkTo="/login">Login</HeaderLink>
            </li>
            <li>
              <HeaderLink linkTo="/register">Register</HeaderLink>
            </li>
            <HeaderLogin />
          </ul>
        </nav>
      </header>
      <hr />
    </>
  );
};

export default Header;
