import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { SignIn } from "../../types";
import UserForm from "../molecules/UserForm";


describe("user form component", () => {
  test("check the user form", () => {
    render(
      <BrowserRouter>
        <UserForm onSubmit={function (data: SignIn): void {
          throw new Error("Function not implemented.");
        } } />
      </BrowserRouter>
    );
    const emailElement = screen.getByLabelText("メールアドレス");
    expect(emailElement).toBeTruthy();
    const passwordElement = screen.getByLabelText("パスワード");
    expect(passwordElement).toBeTruthy();
  });

  test("render login button", async () => {
    render(
      <BrowserRouter>
        <UserForm onSubmit={function (data: SignIn): void {
          throw new Error("Function not implemented.");
        } } />
      </BrowserRouter>
    );
    const buttonElement = await screen.findAllByRole("button");
    expect(buttonElement).toHaveLength(1);
  });
});
