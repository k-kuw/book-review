import { memo } from "react";
import HeaderLink from "../atoms/HeaderLink";
import HeaderLogin from "../molecules/HeaderLogin";

// Header Component
const Header = memo(() => {
  return (
    <>
      <header className="bg-amber-500">
        <h1 className="text-6xl font-black text-center font-mono sha">BOOK REVIEW</h1>
        <nav>
          <ul className="flex flex-row-reverse">
            <HeaderLogin />
            <li className="ml-2">
              <HeaderLink linkTo="/login">Login</HeaderLink>
            </li>
            
            <li className="ml-2">

              <HeaderLink linkTo="/register">Register</HeaderLink>
            </li>
            <li className="ml-2">

              <HeaderLink linkTo="/">BookList</HeaderLink>
            </li>
          </ul>
        </nav>
      <hr className="border-black"/>
      </header>
    </>
  );
});

export default Header;
