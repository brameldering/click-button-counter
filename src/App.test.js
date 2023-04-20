import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders two button app", () => {
  render(<App />);
  const linkElement = screen.getByText(/Clicked/i);
  expect(linkElement).toBeInTheDocument();
});
