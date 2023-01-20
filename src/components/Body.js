import RestaurantCard from "./RestaurantCard";
import { RESTAURANT_LIST } from "../../constants";
import { useState } from "react";

const filterData = (searchText, restaurants) => {
  return restaurants.filter((restro) =>
    restro?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
};

const Body = () => {
  const [searchInp, setSearchInp] = useState("");
  const [allRestaurants, setAllRestaurants] = useState(RESTAURANT_LIST);

  return (
    <div className="body">
      <div>
        <input
          type="search"
          className="inp"
          placeholder="search for restaurants..."
          value={searchInp}
          onChange={(e) => setSearchInp(e.target.value)}
        />
        <button
          className="btn"
          onClick={() => {
            const filteredData = filterData(searchInp, allRestaurants);
            setAllRestaurants(filteredData);
          }}
        >
          Search
        </button>
      </div>
      <div className="card-container">
        {allRestaurants.map((restaurant) => (
          <RestaurantCard {...restaurant.data} />
        ))}
      </div>
    </div>
  );
};

export default Body;
