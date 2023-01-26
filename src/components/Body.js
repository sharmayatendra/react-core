import RestaurantCard from "./RestaurantCard";
import { RESTAURANT_LIST } from "../../constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const filterData = (searchText, restaurants) => {
  return restaurants.filter((restro) =>
    restro?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
};

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInp, setSearchInp] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.52572220267605&lng=77.39057801663876&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    setAllRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
  }

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
            <Link to={`/restaurant/${restaurant?.data?.id}`} className="link">
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
