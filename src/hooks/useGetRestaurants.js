import { useState, useEffect } from "react";
import { GET_ALLRESTAURANT_URL } from "../../constants";

const useGetRestaurants = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  // const jsonData = useFetch(GET_ALLRESTAURANT_URL);
  //   console.log(jsonData);

  const getRestaurants = async () => {
    const res = await fetch(GET_ALLRESTAURANT_URL);
    const { data } = await res.json();

    setAllRestaurants(data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(data?.cards[2]?.data?.data?.cards);
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  return [allRestaurants, filteredRestaurants, setFilteredRestaurants];
};

export default useGetRestaurants;
