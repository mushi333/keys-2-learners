import "@testing-library/jest-dom";
import { getByAltText, render } from "@testing-library/react";
import Page from "../src/app/page";

describe("Page", () => {
  it("renders a heading", () => {
    const { getByAltText } = render(<Page />);

    const imageElement = getByAltText("Vercel Logo");

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", "/vercel.svg");
  });
});
