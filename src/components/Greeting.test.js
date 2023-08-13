import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe(`<Greeting/>`, () => {
  test("renders Hello World as a Text", () => {
    render(<Greeting />);

    //Assert
    const helloElement = screen.getByText(`Hello world`);
    expect(helloElement).toBeInTheDocument();
  });

  test(`renders if the button was not clicked`, () => {
    render(<Greeting />);

    const paragraghElement = screen.getByText(`It's good today`, {
      exact: true,
    });
    expect(paragraghElement).toBeInTheDocument();
  });

  test(`renders Changed, if the button was clicked`, () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole(`button`);
    userEvent.click(buttonElement);

    const paragraghElement = screen.getByText(`Change!`);
    expect(paragraghElement).toBeInTheDocument();
  });

  test(`does not render`, () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole(`button`);
    userEvent.click(buttonElement);

    const paragraghElement = screen.queryByText(`It's good today`, {
      exact: true,
    });
    expect(paragraghElement).toBeNull();
  });
});
