import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;

/**
 * 1 - create store
 * 2 - provider store to whole app
 * 3 - make the slice and reducers in it
 * 4 - use the slice in store
 *      export const {addItem } = cartSlice.actions
 *      export default cartSlice.reducer
 */
