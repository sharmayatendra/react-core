import React from "react";
import ReactDOM from "react-dom/client";

const heading = (
  <h1 id="jsx" key="jsx">
    JSX here
  </h1>
);

const nestedHeaderWithJSX = (
  <div className="title">
    <h1>i am h1</h1>
    <h2>i am h2</h2>
    <h3>i am h3</h3>
  </div>
);
const nestedHeader = React.createElement(
  "div",
  {
    className: "title",
  },
  React.createElement("h1", {}, "I am heading 1!!"),
  React.createElement("h2", {}, "I am heading 2!!"),
  React.createElement("h3", {}, "I am heading 3!!")
);

const Header = () => {
  return (
    <div>
      {heading}
      <h1>i am header component!!</h1>
      <h2>i am secondary heading!!</h2>
    </div>
  );
};

const NestedHeader = () => {
  return (
    <div className="title">
      <Header />
      <h1 className="h1" key="heading1">
        i am h1 from component.
      </h1>
      <h2>i am h2 from component.</h2>
      <h3>i am h3 from component.</h3>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<NestedHeader />);
