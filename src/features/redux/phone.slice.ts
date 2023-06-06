import { createSlice } from "@reduxjs/toolkit";
import { Phone } from "../models/phone";

export type PhoneState = {
  phone: Phone[];
};

const initialState: PhoneState = {
  phone: [],
};

const slicePhone = createSlice({
  name: "add",
  initialState,
  reducers: {
    add: (state, { payload }) => ({
      ...state,
      phone: payload,
    }),
    // delete: (state, { payload }) => ({
    //   ...state,
    //   tasks: state.tasks.filter((item) => item.id !== payload),
    // }),
    // create: (state, { payload }) => ({
    //   ...state,
    //   tasks: [...state.tasks, payload],
    // }),
    // update: (state, { payload }) => ({
    //   ...state,
    //   tasks: state.tasks.map((item) =>
    //     item.id === (payload as Task).id ? (payload as Task) : item
    //   ),
    // }),
  },
});

export const ac = slicePhone.actions;
export default slicePhone.reducer;
