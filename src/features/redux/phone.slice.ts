import { createSlice } from "@reduxjs/toolkit";

export type PhoneState = {
  phoneNumber: string;
  isCalling: boolean;
};

const initialState: PhoneState = {
  phoneNumber: "",
  isCalling: false,
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
      iscalling: !state.isCalling,
    }),
    call: (state) => ({
      ...state,
      iscalling: !state.isCalling,
    }),
  },
});

export const { add, erase, hang, call } = slicePhone.actions;
export default slicePhone.reducer;
