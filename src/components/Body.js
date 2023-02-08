import RestaurantCard from "./RestaurantCard";
import { RESTAURANT_LIST } from "../../constants";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useGetRestaurants from "../hooks/useGetRestaurants";
import Carousel from "./Carousel";

const Body = () => {
  const [searchInp, setSearchInp] = useState("");
  const [allRestaurants, filteredRestaurants, setFilteredRestaurants] =
    useGetRestaurants();
  console.log("rest", allRestaurants);
  //early returning here
  if (!allRestaurants) return null;
  return allRestaurants.length > 0 ? (
    <div className="mt-20">
      {/* <Carousel /> */}
      <div className=" flex flex-col items-center gap-4 mt-4 p-4">
        <div className="flex flex-col gap-2 flex-wrap sm:flex-row items-center justify-center">
          <input
            type="search"
            className="border border-gray-light outline-none p-2 rounded-sm focus:border-orange-light"
            placeholder="search for restaurants..."
            value={searchInp}
            onChange={(e) => setSearchInp(e.target.value)}
          />
          <button
            className="p-2 bg-orange-default text-white font-bold hover:scale-105"
            onClick={() => {
              const filteredData = filterData(searchInp, allRestaurants);
              setFilteredRestaurants(filteredData);
            }}
          >
            Search
          </button>
        </div>
        {filteredRestaurants.length > 0 ? (
          <div className="grid grid-cols-1 place-items-start gap-8 sm:grid-cols-3 md:grid-cols-4">
            {filteredRestaurants.map((restaurant) => (
              <Link
                to={`/restaurant/${restaurant?.data?.id}`}
                className=""
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
    </div>
  ) : (
    <Shimmer />
  );
};

export default Body;
