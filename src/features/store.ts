import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./appSlice";

export const store = configureStore({
  reducer: {
    design: counterReducer,
  },
});
