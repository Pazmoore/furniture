import { CartItem } from "@/interfaces/product/Product";
import { createSlice } from "@reduxjs/toolkit";

interface FavouriteState {
  items: CartItem[];
}

const initialState: FavouriteState = {
  items: [],
};

//Create a slice

const favouriteSlice = createSlice({
  //name of slice
  name: "favourite",
  //initial state
  initialState,
  //create reducers
  reducers: {
    //functions to manipulate states
    addToFavourite: (state, action) => {
      //   const itemToAdd = action.payload;
      //   const existingItem = state.items.find((item) => item.id === itemToAdd.id);

      if (!state.items.find((item: any) => item.id === action.payload.id)) {
        state.items.push(action.payload);
      }

      console.log(action.payload);
    },

    removefromFavourite: (state, action) => {
      const cartId = action.payload;
      state.items = state.items.filter((item) => item.id !== cartId);
    },
  },
});

export const { addToFavourite, removefromFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;

//export the reducers(actions)
