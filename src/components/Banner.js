import { IMG_CDN_URL } from "../../constants";

const Banner = ({
  name,
  cloudinaryImageId,
  cuisines,
  locality,
  area,
  avgRating,
  sla,
  costForTwo,
  aggregatedDiscountInfo,
}) => {
  return (
    <div className="banner">
      <div className="banner-img-container">
        <img src={IMG_CDN_URL + cloudinaryImageId} alt="food-img" />
      </div>
      <div className="banner-info-container">
        <h1 className="banner-heading">{name}</h1>

        <div className="banner-cuisines-container">
          <h4 className="banner-cuisines">{cuisines?.join(", ")}</h4>
          <h4 className="banner-cuisines">{locality + ", " + area}</h4>
          <div className="banner-restaurant-rating-container">
            <span>
              <i className="material-symbols-outlined star star-detail">star</i>
              {avgRating}
            </span>
            <span>{sla?.deliveryTime} mins</span>
            <span>₹ {costForTwo / 100}</span>
          </div>
        </div>
      </div>

      <div className="banner-offer-container">
        <fieldset>
          <legend>Offers</legend>
          <div className="discount">
            {aggregatedDiscountInfo?.descriptionList.map((disc, idx) => (
              <h2 key={idx}> {disc?.meta}</h2>
            ))}
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default Banner;
