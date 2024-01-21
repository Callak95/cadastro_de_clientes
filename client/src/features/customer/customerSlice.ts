import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Customer {
  id?: string;
  name: string;
  email: string;
  phone: string;
  xcoord: string;
  ycoord: string;
}

interface CustomerState {
  customers: Customer[];
}

const initialState: CustomerState = {
  customers: [],
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setCustomers: (state, action: PayloadAction<Customer[]>) => {
      state.customers = action.payload;
    },
  },
});

export const { setCustomers } = customerSlice.actions;
export default customerSlice.reducer;
