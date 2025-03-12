import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={LOGO_URL} alt="Logo" className="logo" />
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

export default Header;
