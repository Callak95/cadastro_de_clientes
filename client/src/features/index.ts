import { configureStore } from "@reduxjs/toolkit";
import customerSlice from "./customer/customerSlice";

export const store = configureStore({
  reducer: {
    customer: customerSlice,
  },
});

type GetStateType = typeof store.getState;
export type RootState = ReturnType<GetStateType>;
