import { useState } from "react";
import Logo from "../assets/img/logo.webp";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Title = () => {
  return (
    <div className="hidden sm:flex w-[4rem]">
      <a href="/">
        <img data-testid="logo" src={Logo} alt="logo" className="w-full" />
      </a>
    </div>
  );
};

const Header = () => {
  //   const [searchInp, setSearchInp] = useState("");

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="flex items-center w-full z-10 bg-white shadow-md fixed top-0 h-16 p-2 sm:justify-between ">
      <Title />
      {/* <div>
        <input
          type="search"
          className="inp"
          placeholder="search..."
          value={searchInp}
          onChange={(e) => setSearchInp(e.target.value)}
        />
        <button>search</button>
      </div> */}
      <ul className="flex flex-wrap px-4 gap-2 grow sm:grow-0 ">
        <li className="grow">
          <Link to="/" className="" data-testid="links">
            Home
          </Link>
        </li>
        <li className="grow">
          <Link to="contact" className="" data-testid="links">
            Contact
          </Link>
        </li>
        <li className="grow">
          <Link to="about" className="" data-testid="links">
            About us
          </Link>
        </li>
        <li className="grow">
          <Link to="/cart" className="" data-testid="cart">
            Cart - {cartItems.length} items
          </Link>
        </li>
        <li className="grow">
          <Link to="instamart" className="" data-testid="links">
            Instamart
          </Link>
        </li>
        {/* <span className="material-symbols-outlined">person</span> */}
      </ul>
      {/* <Link to="login">
        <button>Login</button>
      </Link> */}
    </header>
  );
};

export default Header;
