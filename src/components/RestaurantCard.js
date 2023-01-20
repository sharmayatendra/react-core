import { IMG_CDN_URL } from "../../constants";

const RestaurantCard = ({
  name,
  cuisines,
  avgRating,
  deliveryTime,
  costForTwoString,
  cloudinaryImageId,
}) => {
  return (
    <div className="restaurant-card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="food-img" />
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <span>{avgRating}</span>
      <span>{deliveryTime}</span>
      <span>{costForTwoString}</span>
    </div>
  );
};

export default RestaurantCard;
