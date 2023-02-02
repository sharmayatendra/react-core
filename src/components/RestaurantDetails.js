import { useParams } from "react-router";
import { IMG_CDN_URL } from "../../constants";
import useRestaurantDetails from "../hooks/useRestaurantDetails";
import Banner from "./Banner";
import RestaurantDishCard from "./RestaurantDishCard";
const RestaurantDetails = () => {
  const { id } = useParams();

  const restaurantDetail = useRestaurantDetails(id);
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
