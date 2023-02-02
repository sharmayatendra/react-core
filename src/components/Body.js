import RestaurantCard from "./RestaurantCard";
import { RESTAURANT_LIST } from "../../constants";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useGetRestaurants from "../hooks/useGetRestaurants";

const Body = () => {
  const [searchInp, setSearchInp] = useState("");

  const [allRestaurants, filteredRestaurants, setFilteredRestaurants] =
    useGetRestaurants();

  console.log("rest", allRestaurants);

  //early returning here
  if (!allRestaurants) return null;

  return allRestaurants.length > 0 ? (
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
            setFilteredRestaurants(filteredData);
          }}
        >
          Search
        </button>
      </div>
      {filteredRestaurants.length > 0 ? (
        <div className="card-container">
          {filteredRestaurants.map((restaurant) => (
            <Link
              to={`/restaurant/${restaurant?.data?.id}`}
              className="link"
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
            </Link>
          ))}
        </div>
      ) : (
        <h1>No matching restro found!😢😢</h1>
      )}
    </div>
  ) : (
    <Shimmer />
  );
};

export default Body;
