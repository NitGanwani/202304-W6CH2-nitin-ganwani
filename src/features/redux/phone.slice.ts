import { createSlice } from "@reduxjs/toolkit";

export type PhoneState = {
  phoneNumber: string;
  isCall: boolean;
};

const initialState: PhoneState = {
  phoneNumber: "",
  isCall: false,
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
    hang: (state) => ({
      ...state,
      isCall: !state.isCall,
    }),
    call: (state) => ({
      ...state,
      isCall: !state.isCall,
    }),
  },
});

export const { add, erase, hang, call } = slicePhone.actions;
export default slicePhone.reducer;
