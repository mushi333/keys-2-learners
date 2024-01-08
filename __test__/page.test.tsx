import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Page from "../src/app/page";

describe("Home", () => {
  it("renders the home page", () => {
    render(<Page />);
  });
});
