import { useState, useEffect } from "react";
import { GET_ALLRESTAURANT_URL } from "../../constants";
import useFetch from "./useFetch";

const useGetRestaurants = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const jsonData = useFetch(GET_ALLRESTAURANT_URL);
  //   console.log(jsonData);

  useEffect(() => {
    getRestaurants();
  }, [jsonData]);

  function getRestaurants() {
    setAllRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
  }

  return [allRestaurants, filteredRestaurants, setFilteredRestaurants];
};

export default useGetRestaurants;
