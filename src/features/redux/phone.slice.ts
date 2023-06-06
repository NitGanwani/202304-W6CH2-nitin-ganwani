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

export const { add } = slicePhone.actions;
export default slicePhone.reducer;
