import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
// import Instamart from "./components/Instamart";
import RestaurantDetails from "./components/RestaurantDetails";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import ProfileClass from "./components/ProfileClass";
import useOnline from "./hooks/useOnline";
import { Provider } from "react-redux";
import store from "./app/store";

// lazy loading instamart component here
const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
  const isOnline = useOnline();

  if (!isOnline) {
    return (
      <Provider store={store}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <h1 className="mt-20 text-center text-4xl text-bold">
            🔴, please check your internet!!
          </h1>
          <Footer />
        </div>
      </Provider>
    );
  }
  return (
    <Provider store={store}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <ProfileClass />,
          },
        ],
      },

      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },

      {
        path: "/instamart",
        element: (
          <Suspense fallback={<h1>loading...</h1>}>
            <Instamart />
          </Suspense>
        ),
      },

      {
        path: "/restaurant/:id",
        element: <RestaurantDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
