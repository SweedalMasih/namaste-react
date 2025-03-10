import React from "react";
import ReactDOM from "react-dom/client";

/*
Episodes 1,2,3
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
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqO5pqbp44nlwC_VMjb0YqB2lTKzoH8hX13w&s"
          alt="Logo"
          className="logo"
        />
      </div>

      <div className="navbar">
        <ul className="navItems">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li className="cart-item">
            <span>Cart </span>
            {/* <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr4QkMCkwj6Sw48YaAw4gFB0K0BY9Th5no8Q&s"
              className="cart"
            /> */}
          </li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
