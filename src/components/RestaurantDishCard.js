import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../../constants";
import Food from "../assets/img/food.jpg";
import { addItem } from "../features/cart/cartSlice";

const RestaurantDishCard = ({
  name,
  price,
  description,
  cloudinaryImageId,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="mt-20 max-w-3xl p-4 flex gap-8 justify-between">
      <div className="flex flex-col max-w-[25rem]">
        <h3 className="text-black opacity-80 font-bold text-lg">{name}</h3>
        <h3 className="text-gray-light mt-2">₹ {price / 100}</h3>

        {description && (
          <p className="mt-6 text-sm text-gray-xlight w-full">{description}</p>
        )}
      </div>

      <div className="w-40 relative ">
        <img
          src={cloudinaryImageId ? IMG_CDN_URL + cloudinaryImageId : Food}
          alt="dish-img"
          className="w-full rounded "
        />

        {/* <div className="absolute bottom-0.5 left-8"> */}
        <button
          className=" px-8 py-1.5 border border-gray-xlight bg-white text-green text-lg font-bold"
          onClick={() =>
            dispatch(addItem({ name, price, description, cloudinaryImageId }))
          }
        >
          Add
        </button>
        {/* </div> */}
      </div>
    </div>
  );
};

export default RestaurantDishCard;
