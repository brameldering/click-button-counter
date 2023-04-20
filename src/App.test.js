import { render, screen, userEvent } from "@testing-library/react";
import App from "./App";

test("renders button app", () => {
  render(<App />);
  const firstButton = screen.queryAllByText(/Clicked/i)[1];
  console.log(firstButton);
  userEvent.click(firstButton);
  expect(firstButton).toBeInTheDocument();
});
