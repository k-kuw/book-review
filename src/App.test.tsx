import { render, screen } from "@testing-library/react";
import App from "./App";
import ReactDOM, { unmountComponentAtNode } from "react-dom";
import HeaderLink from "./components/atoms/HeaderLink";
import { BrowserRouter } from "react-router-dom";

let container: any = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});

it("render a user name", () => {
  ReactDOM.render(
    <BrowserRouter>
      <HeaderLink linkTo={"/"} children={"Login"} />
    </BrowserRouter>,
    container
  );
  const linkElement = screen.getByText(/Login/i)
  console.log(linkElement)
  expect(linkElement).toBeInTheDocument()
});

// describe('App', () => {
//   test('renders App component', () => {
//     render(<App />);

//     // implicit assertion
//     // because getByText would throw error
//     // if element wouldn't be there
//     screen.getByText('Search:');

//     // explicit assertion
//     // recommended
//     expect(screen.getByText('Search:')).toBeInTheDocument();
//   });
// });
