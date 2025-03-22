import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  console.log("Header rendered");
  useEffect(() => {
    console.log("useffect called");
  }, []);

  return (
    <div className="header">
      <div className="logoContainer">
        <img src={LOGO_URL} alt="Logo" className="logo" />
      </div>

      <div className="navbar">
        <ul className="navItems">
          <li>
            <Link className="nav-item" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-item" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="nav-item" to="/contact">
              Contact Us
            </Link>
          </li>
          <li className="cart-item nav-item">
            <span>Cart </span>
            {/* <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr4QkMCkwj6Sw48YaAw4gFB0K0BY9Th5no8Q&s"
              className="cart"
            /> */}
          </li>
          <li>
            <button
              className="loginBtn"
              onClick={() => {
                {
                  btnName === "Login"
                    ? setBtnName("Logout")
                    : setBtnName("Login");
                  console.log(btnName);
                }
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
