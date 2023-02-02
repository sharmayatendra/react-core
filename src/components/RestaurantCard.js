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
      <div className="restaurant-headings align-left">
        <h2 className="restaurant-name">{name}</h2>
        <h4 className="restaurant-cuisine">{cuisines.join(", ")}</h4>
      </div>
      <footer className="restaurant-card-footer">
        <div className="restaurant-rating flex">
          <i className="material-symbols-outlined star">star</i>
          <span className="avg-rating">{avgRating}</span>
          {/* <span>{avgRating}</span> */}
        </div>
        <span className="restaurant-delivery">{deliveryTime} MINS</span>
        <span className="restaurant-cost">{costForTwoString}</span>
      </footer>
    </div>
  );
};

export default RestaurantCard;
