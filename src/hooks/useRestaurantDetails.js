import { useEffect, useState } from "react";
import { RESTAURANT_DETAIL_URL } from "../../constants";
const useRestaurantDetails = (id) => {
  const [restaurantDetail, setRestaurantDetail] = useState(null);

  useEffect(() => {
    getRestaurantDetail();
  }, []);

  const getRestaurantDetail = async () => {
    const res = await fetch(RESTAURANT_DETAIL_URL + id);
    const { data } = await res.json();
    setRestaurantDetail(data);
  };

  return restaurantDetail;
};

export default useRestaurantDetails;
