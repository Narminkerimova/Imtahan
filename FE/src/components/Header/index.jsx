import { useContext, useState } from "react";
import { Link } from "react-router";
import { BasketContext } from "../../context/BasketProvider";
import "./style.css";

function Header() {
  const { basket } = useContext(BasketContext);
  const [navButton, setNavButton] = useState(false);
  return (
    <header>
      <div className="website_container">
        <nav>
          <div className="nav_hidden_button">
            <button onClick={() => setNavButton(!navButton)}>
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
          <div className="nav_logo">
            <img
              src="https://preview.colorlib.com/theme/aranoz/img/logo.png.webp"
              alt="logo"
            />
          </div>
          <div className="nav_links">
            <ul>
              <li>
                <Link to={`/`}>Home</Link>
              </li>
              <li>
                <Link to={`/admin`}>Admin</Link>
              </li>
              <li>
                <Link to={`/adminadd`}>Admin Add</Link>
              </li>
              <li>
                <Link to={`/basket`}>Basket</Link>
                {basket.length}
              </li>
              <li>
                <Link to={`/wishlist`}>Wish List</Link>
              </li>
            </ul>
          </div>
          <div className="nav_icons">
            <i className="fa-solid fa-magnifying-glass"></i>
            <Link to={"/wishlist"}>
              <i className="fa-regular fa-heart"></i>
            </Link>
            <Link to={"/basket"}>
              <i className="fa-solid fa-basket-shopping"></i>
            </Link>
          </div>
        </nav>
        {navButton ? (
          <div className="hidden_links">
            <ul>
              <li>
                <Link to={`/`}>Home</Link>
              </li>
              <li>
                <Link to={`/admin`}>Admin</Link>
              </li>
              <li>
                <Link to={`/adminadd`}>Admin Add</Link>
              </li>
              <li>
                <Link to={`/basket`}>Basket</Link>
                {basket.length}
              </li>
              <li>
                <Link to={`/wishlist`}>Wish List</Link>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </header>
  );
}

export default Header;
