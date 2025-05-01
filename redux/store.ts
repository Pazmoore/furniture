import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slicers/cartSlicer";
import favouriteSlice from "./slicers/favouriteSlicer";

const store = configureStore({
  //slices go here
  reducer: {
    //reducers go here
    cart: cartSlice,
    favourite: favouriteSlice,
  },
});

export type RootType = ReturnType<typeof store.getState>;

export default store;
