import { IMG_CDN_URL } from "../../constants";

const RestaurantDishCard = ({
  name,
  price,
  description,
  cloudinaryImageId,
}) => {
  return (
    <div className="restaurant-dish-card-container">
      <div className="restaurant-dish-detail">
        <h3 className="dishname">{name}</h3>
        <h3 className="dishprice">₹ {price / 100}</h3>
        {description && <p className="dish-description">{description}</p>}
      </div>

      <div className="restaurant-dish-img">
        <img src={IMG_CDN_URL + cloudinaryImageId} alt="dish-img" />
        <div className="btn-container">
          <button className="add-btn">Add</button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDishCard;
