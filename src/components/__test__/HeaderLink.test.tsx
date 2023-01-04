import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HeaderLink from "../atoms/HeaderLink";

test("renders header link", () => {
  render(
    <BrowserRouter>
      <HeaderLink linkTo={"/"} children={"Login"} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText("Login");
  expect(linkElement).toBeInTheDocument();
});
