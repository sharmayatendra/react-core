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
    <div className="max-w-[18rem] border border-white p-4 hover:border hover:border-gray-xlight hover:shadow-md ">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="food-img" />
      <div className="mt-4">
        <h2 className=" text-black opacity-80 font-bold text-xs sm:text-sm">
          {name}
        </h2>
        <h4 className="text-xs text-gray-light mt-2">{cuisines.join(", ")}</h4>
      </div>
      <footer className="text-xs text-gray-light mt-4 flex flex-wrap gap-2 items-center justify-between">
        <div className="bg-green px-1 flex items-center gap-px text-white">
          <i className="material-symbols-outlined text-md relative bottom-0.5">
            star
          </i>
          <span className="text-md">{avgRating}</span>
        </div>
        <span className="">{deliveryTime} MINS</span>
        <span className="">{costForTwoString}</span>
      </footer>
    </div>
  );
};

export default RestaurantCard;
