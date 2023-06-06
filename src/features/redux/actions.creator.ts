import { Phone } from "../models/phone";
import { actionTypes } from "./actions.types";
import { createAction } from "@reduxjs/toolkit";

export type PhoneAction = {
  type: string;
  payload?: string | boolean;
};

export const addNumberAction = createAction<Phone[]>(actionTypes.add);

export const deleteNumberAction = createAction<number>(actionTypes.delete);
