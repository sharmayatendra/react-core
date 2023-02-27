import { fireEvent, render, waitFor } from "@testing-library/react";
import { MENU_DATA } from "../../mocks/mockData";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import store from "../../app/store";
import RestaurantDetails from "../RestaurantDetails";
import Header from "../Header";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MENU_DATA),
  });
});

test("menu should load on restaurant page", async () => {
  const menu = render(
    <StaticRouter>
      <Provider store={store}>
        <RestaurantDetails />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(menu.getByTestId("menu-items2")));

  const menuItems = menu.getAllByTestId("menu-items2");
  expect(menuItems[0].children.length).toBe(164);
});

test("cart should update on adding food item", async () => {
  const menu = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantDetails />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(menu.getByTestId("menu-items2")));

  const addBtn = menu.getAllByTestId("add-btn");
  fireEvent.click(addBtn[0]);

  const cart = menu.getByTestId("cart");
  expect(cart.innerHTML).toBe("Cart - 1 items");
});
