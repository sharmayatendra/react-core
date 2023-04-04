import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { setupStore } from "../../app/store";
import Cart from "../Cart";
import Header from "../Header";
import { StaticRouter } from "react-router-dom/server";
import CartCard from "../CartCard";
import mockStore from "../../mocks/mockStore";

const store = setupStore(mockStore);

test("cart items should load if cart is not empty", () => {
  const cart = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <Cart />
      </Provider>
    </StaticRouter>
  );

  const cartCard = cart.getAllByTestId("cart-card");
  expect(cartCard.length).toBe(1);
});

test("cart should be empty on clicking of clear cart button", () => {
  const cart = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <Cart />
      </Provider>
    </StaticRouter>
  );

  const clearCart = cart.getByTestId("clear-cart");
  const cartItems = cart.getByTestId("cart");
  fireEvent.click(clearCart);

  expect(cartItems.innerHTML).toBe("Cart - 0 items");
});
