import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe(`<Greeting/>`, () => {
  test("renders Hello World as a Text", () => {
    render(<Greeting />);

    //Assert
    const helloElement = screen.getByText(`Hello world`);
    expect(helloElement).toBeInTheDocument;
  });
});
