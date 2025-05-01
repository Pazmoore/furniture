import { CartItem } from "@/interfaces/product/Product";
import { createSlice } from "@reduxjs/toolkit";

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

//Create a slice

const cartSlice = createSlice({
  //name of slice
  name: "cart",
  //initial state
  initialState,
  //create reducers
  reducers: {
    //functions to manipulate states
    addToCart: (state, action) => {
      const itemToAdd = action.payload;
      const existingItem = state.items.find((item) => item.id === itemToAdd.id);

      if (existingItem) {
        // If the item already exists in the cart, increase its quantity
        existingItem.quantity += itemToAdd.quantity;
      } else {
        // If the item is not in the cart, add it to the cart
        state.items.push({ ...itemToAdd, quantity: itemToAdd.quantity || 1 });
      }
      console.log(action.payload);
    },

    removefromcart: (state, action) => {
      const cartId = action.payload;
      state.items = state.items.filter((item) => item.id !== cartId);
    },

    increaseQty: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);

      if (existingItem) {
        existingItem.quantity = (existingItem.quantity ?? 1) + 1;
      }
    },

    decreaseQty: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);

      if (existingItem && (existingItem.quantity ?? 1) > 1) {
        // Provide a default value for quantity if it's undefined
        existingItem.quantity = (existingItem.quantity ?? 1) - 1;
      }
    },
  },
});

export const { addToCart, removefromcart, increaseQty, decreaseQty } =
  cartSlice.actions;
export default cartSlice.reducer;

//export the reducers(actions)
