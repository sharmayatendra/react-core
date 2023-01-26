import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IMG_CDN_URL } from "../../constants";
import Banner from "./Banner";
import RestaurantDishCard from "./RestaurantDishCard";
const RestaurantDetails = () => {
  const { id } = useParams();
  const [restaurantDetail, setRestaurantDetail] = useState(null);

  useEffect(() => {
    getRestaurantDetail();
  }, []);

  const getRestaurantDetail = async () => {
    const res = await fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=28.52572220267605&lng=77.39057801663876&menuId=${id}`
    );
    const { data } = await res.json();
    console.log(data);
    setRestaurantDetail(data);
  };

  if (!restaurantDetail) return null;

  const menuItems = Object?.values(restaurantDetail?.menu?.items);
  console.log(menuItems);
  return (
    <>
      <Banner {...restaurantDetail} />
      <div className="restaurant-dish-container">
        {menuItems.map((item) => (
          <RestaurantDishCard {...item} />
        ))}
      </div>
    </>
  );
};

export default RestaurantDetails;
