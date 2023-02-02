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
import Profile from "./components/Profile";
import ProfileClass from "./components/ProfileClass";
import useOnline from "./hooks/useOnline";

// lazy loading instamart component here
const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
  const isOnline = useOnline();

  if (!isOnline) {
    return (
      <>
        <Header />
        <h1>🔴, please check your internet!!</h1>
        <Footer />
      </>
    );
  }
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
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
