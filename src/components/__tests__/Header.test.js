import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../app/store";
import Header from "../Header";
import { StaticRouter } from "react-router-dom/server";

test("logo should load on rendering Header", () => {
  // load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const logo = header.getByTestId("logo");

  expect(logo.src).toBe("http://localhost/dummy.png");
  // check if logo is loaded
});

test("cart should have 0 items on load", () => {
  // load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const cart = header.getByTestId("cart");

  // check if logo is loaded
  expect(cart.innerHTML).toBe("Cart - 0 items");
});
