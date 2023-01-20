import { useState } from "react";

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
        <li>Home</li>
        <li>Contact</li>
        <li>About us</li>
        <li>Cart</li>
        <span className="material-symbols-outlined icon">person</span>
      </ul>
    </header>
  );
};

export default Header;
