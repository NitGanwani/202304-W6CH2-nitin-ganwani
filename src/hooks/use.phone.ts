import { PhoneState, phoneReducer } from "../features/redux/reducer";
import { useReducer } from "react";
import * as action from "../features/redux/actions.creator";

export function usePhone() {
  const initialState: PhoneState = {
    phoneNumber: "",
    isCalling: false,
  };

  const [phoneState, dispatch] = useReducer(phoneReducer, initialState);

  const phoneNumbers = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "delete",
  ];

  function handleAddNumber(value: string) {
    if (phoneState.phoneNumber.length < 9) {
      dispatch(action.addNumberAction(value));
    }
  }

  function handleDelete() {
    dispatch(action.deleteNumberAction());
  }

  return {
    screen: phoneState.phoneNumber,
    isCalling: phoneState.isCalling,
    handleAddNumber,
    handleDelete,
    phoneNumbers,
  };
}
