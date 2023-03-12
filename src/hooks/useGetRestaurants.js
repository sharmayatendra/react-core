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
    (async () => {
      const res = await fetch(
        "https://www.googleapis.com/youtube/v3/liveStreams?id=jab5aa5k5Sg&part=snippet&key=AIzaSyBDXfY3Snnw07X39rUEAw9ktybk9_bdkzo",
        {
          headers: {
            Authorization: "Bearer " + "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",
          },
        }
      );
      const resp = await res.json();
      console.log(resp);
    })();
  }, []),
    useEffect(() => {
      getRestaurants();
    }, []);

  return [allRestaurants, filteredRestaurants, setFilteredRestaurants];
};

export default useGetRestaurants;
