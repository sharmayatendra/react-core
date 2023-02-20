import { useDispatch, useSelector } from "react-redux";
import CartCard from "./CartCard";
import { clearCart } from "../features/cart/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  return (
    <div className="mt-20 flex flex-col p-4">
      <button
        className="px-4 border border-red bg-red text-white rounded-sm w-32 self-center sm:self-end mr-2"
        onClick={() => dispatch(clearCart())}
      >
        Clear Cart
      </button>
      <div className="mt-8 p-4 flex flex-wrap gap-2">
        {cartItems.map((item) => (
          <CartCard {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
