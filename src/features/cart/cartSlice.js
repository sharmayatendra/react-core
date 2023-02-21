import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const ifExist = state.items.find((item) => item.id === action.payload.id);
      if (ifExist) ifExist.quantity += 1;
      else state.items.push(action.payload);
    },
    incrementItem: (state, action) => {
      const ifExist = state.items.find((item) => item.id === action.payload.id);
      ifExist.quantity += 1;
    },
    decrementItem: (state, action) => {
      const ifExist = state.items.find((item) => item.id === action.payload.id);
      const idx = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (ifExist.quantity === 1) state.items.splice(idx, 1);
      ifExist.quantity -= 1;
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, clearCart, incrementItem, decrementItem } =
  cartSlice.actions;

export default cartSlice.reducer;
