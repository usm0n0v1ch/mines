import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./xbet";

export const store = configureStore({
  reducer: {
    xbet: reducer,
  },
});