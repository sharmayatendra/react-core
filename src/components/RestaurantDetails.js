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
  return (
    <>
      <Banner {...restaurantDetail} />
      <div className="flex flex-col items-center">
        <div className="flex flex-col  my-auto mx-0" data-testid="menu-items2">
          {menuItems.map((item) => (
            <RestaurantDishCard {...item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantDetails;
