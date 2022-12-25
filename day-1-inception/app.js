const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React!!"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "heading2",
  },
  "Hello everyone"
);

const container = React.createElement("div", { id: "container" }, [
  heading,
  heading2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
