import { configureStore } from "@reduxjs/toolkit";
import phoneReducer from "../../../features/redux/phone.slice";

export const store = configureStore({
  reducer: {
    phone: phoneReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
