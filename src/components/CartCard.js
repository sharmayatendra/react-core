import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../../constants";
import Food from "../assets/img/food.jpg";

const CartCard = ({ name, description, cloudinaryImageId, price }) => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="max-w-[16rem] border border-white p-4 hover:border-gray-xlight">
      <img src={cloudinaryImageId ? IMG_CDN_URL + cloudinaryImageId : Food} />
      <h1 className="mt-4 font-bold text-ellipsis whitespace-nowrap overflow-hidden">
        {name}
      </h1>
      <h1 className="mt-2 font-bold">Rs: {price / 100}</h1>
      <div className="flex items-center mt-2 shadow-sm border border-gray-xlight justify-evenly">
        <button className="px-4 py-2 bg-white text-green font-bold w-full">
          -
        </button>
        <span className="px-4 font-bold">0</span>
        <button className="px-4 py-2 bg-white text-green font-bold w-full">
          +
        </button>
      </div>
    </div>
  );
};

export default CartCard;
