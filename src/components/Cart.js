import { useDispatch, useSelector } from "react-redux";
import CartCard from "./CartCard";
import { clearCart } from "../features/cart/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  return (
    <div className="mt-20 p-4 flex flex-wrap gap-2">
      <button
        className="px-2 border border-gray-light"
        onClick={() => dispatch(clearCart())}
      >
        Clear Cart
      </button>
      {cartItems.map((item) => (
        <CartCard {...item} />
      ))}
    </div>
  );
};

export default Cart;
