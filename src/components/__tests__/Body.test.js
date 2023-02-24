import { fireEvent, render, waitFor } from "@testing-library/react";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import store from "../../app/store";
import Body from "../Body";
import { RESTAURANT_DATA } from "../../mocks/mockData";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(RESTAURANT_DATA),
  });
});

test("Restaurant should be on homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")));

  const resList = body.getByTestId("res-list");

  expect(resList.children.length).toBe(15);
});

test("searching input on homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")));

  const searchInput = body.getByTestId("search-input");

  fireEvent.change(searchInput, {
    target: {
      value: "chole",
    },
  });

  const searchBtn = body.getByTestId("search-btn");

  fireEvent.click(searchBtn);

  const resList = body.getByTestId("res-list");

  expect(resList.children.length).toBe(2);
});

test("if no restaurant found for input searched", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")));

  const searchInput = body.getByTestId("search-input");

  fireEvent.change(searchInput, {
    target: {
      value: "ccccc",
    },
  });

  const searchBtn = body.getByTestId("search-btn");

  fireEvent.click(searchBtn);

  const noRestaurantFound = body.getByTestId("no-match");

  expect(noRestaurantFound.innerHTML).toBe("No matching restro found!😢😢");
});
