import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN_URL } from "../../constants";
import Food from "../assets/img/food.jpg";
import { decrementItem, incrementItem } from "../features/cart/cartSlice";

const CartCard = ({ name, id, cloudinaryImageId, price, quantity }) => {
  const dispatch = useDispatch();

  return (
    <div className="max-w-[16rem] border border-white p-4 hover:border-gray-xlight">
      <img
        src={cloudinaryImageId ? IMG_CDN_URL + cloudinaryImageId : Food}
        className="aspect-video"
      />
      <h1 className="mt-4 font-bold text-ellipsis whitespace-nowrap overflow-hidden">
        {name}
      </h1>
      <h1 className="mt-2 font-bold">Rs: {price / 100}</h1>
      <div className="flex items-center mt-2 shadow-sm  justify-evenly">
        <button
          className="px-2 py-2 bg-white border border-gray-xlight text-green font-bold w-full"
          onClick={() => dispatch(decrementItem({ id }))}
        >
          -
        </button>
        <span className="px-4 font-bold">{quantity}</span>
        <button
          className="px-2 py-2 bg-white border border-gray-xlight text-green font-bold w-full"
          onClick={() => dispatch(incrementItem({ id }))}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartCard;
