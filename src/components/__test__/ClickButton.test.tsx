import { render, screen } from "@testing-library/react";
import ClickButton from "../atoms/ClickButton";

test("renders click button", () => {
  render(<ClickButton children={"登録"} />);
  const buttonElement = screen.getByText("登録");
  expect(buttonElement).toBeInTheDocument();
});
