import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "h1- Hello World from nested elements!"),
//     React.createElement("h2", {}, "h2- Hello World from nested elements!"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "h1- Hello World from nested elements!"),
//     React.createElement("h2", {}, "h2- Hello World from nested elements!"),
//   ]),
// ]);

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World from React!"
);
console.log(heading); // object

const jsxHeading = <h1>Hello World using JSX!</h1>;

const Title = () => <h1>My title</h1>;

const HeadingComponent = () => {
  return (
    <div className="container">
      <Title />
      <h1>Hello World from a React component!</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// root.render(jsxHeading);
root.render(<HeadingComponent />);
