import { createSlice } from "@reduxjs/toolkit";

export type PhoneState = {
  phoneNumber: string;
  iscalling: boolean;
};

const initialState: PhoneState = {
  phoneNumber: "",
  iscalling: false,
};

const slicePhone = createSlice({
  name: "phone",
  initialState,
  reducers: {
    add: (state, { payload }) => ({
      ...state,
      phoneNumber: state.phoneNumber + payload,
    }),
    erase: (state) => ({
      ...state,
      phoneNumber: state.phoneNumber.substring(0, state.phoneNumber.length - 1),
    }),
  },
});

export const { add, erase } = slicePhone.actions;
export default slicePhone.reducer;
