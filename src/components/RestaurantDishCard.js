import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../../constants";
import Food from "../assets/img/food.jpg";
import { addItem } from "../features/cart/cartSlice";

const RestaurantDishCard = ({
  name,
  price,
  description,
  cloudinaryImageId,
  variantsV2,
  id,
}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const itemAlreadyInCart = cartItems.find((item) => item.id === id);

  return (
    <div className="mt-20 max-w-3xl p-4 flex gap-8 justify-between">
      <div className="flex flex-col max-w-[25rem]">
        <h3 className="text-black opacity-80 font-bold text-lg">{name}</h3>
        <h3 className="text-gray-light mt-2">
          ₹ {price ? price / 100 : variantsV2?.pricing_models[0]?.price / 100}
        </h3>

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
        {itemAlreadyInCart ? (
          <button className=" px-8 py-1.5 border border-gray-xlight bg-white text-green text-lg font-bold">
            <Link to="/cart">Go to Cart</Link>
          </button>
        ) : (
          <button
            className=" px-8 py-1.5 border border-gray-xlight bg-white text-green text-lg font-bold"
            onClick={() =>
              dispatch(
                addItem({
                  name,
                  price,
                  description,
                  cloudinaryImageId,
                  id,
                  quantity: 1,
                })
              )
            }
          >
            Add
          </button>
        )}
        {/* <button
          className=" px-8 py-1.5 border border-gray-xlight bg-white text-green text-lg font-bold"
          onClick={() =>
            dispatch(
              addItem({
                name,
                price,
                description,
                cloudinaryImageId,
                id,
                quantity: 1,
              })
            )
          }
        >
          Add
        </button> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default RestaurantDishCard;
