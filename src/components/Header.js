import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <div className="img-container">
      <a href="/">
        <img
          src="https://logosandtypes.com/wp-content/uploads/2021/01/swiggy.svg"
          alt="logo"
        />
      </a>
    </div>
  );
};

const Header = () => {
  //   const [searchInp, setSearchInp] = useState("");

  return (
    <header className="header">
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
      <ul className="list-items">
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="contact" className="link">
            Contact
          </Link>
        </li>
        <li>
          <Link to="about" className="link">
            About us
          </Link>
        </li>
        <li>
          <Link className="link">Cart</Link>
        </li>
        <li>
          <Link to="instamart" className="link">
            Instamart
          </Link>
        </li>
        <span className="material-symbols-outlined icon">person</span>
      </ul>
      <Link to="login">
        <button>Login</button>
      </Link>
    </header>
  );
};

export default Header;
