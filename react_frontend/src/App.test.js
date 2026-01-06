import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the CSS showcase header", () => {
  render(<App />);
  expect(screen.getByText(/CSS Showcase/i)).toBeInTheDocument();
});
