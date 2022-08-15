import {configureStore} from "@reduxjs/toolkit"
import productReducer from "./Cars/productSlice"

export const store = configureStore({
  reducer: {
    product: productReducer
  },
});