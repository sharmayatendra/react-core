import Footer from "../Footer";
import { render } from "@testing-library/react";

test("footer logo should be present upon footer render", () => {
  const footer = render(<Footer />);

  const logo = footer.getByTestId("footer-logo");

  expect(logo.src).toBe("http://localhost/dummy.png");
});
