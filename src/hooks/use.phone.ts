import { useSelector, useDispatch } from "react-redux";
import * as action from "../features/redux/phone.slice";
import { AppDispatch, RootState } from "../core/components/store/store";

export function usePhone() {
  const { phoneNumber, iscalling } = useSelector(
    (state: RootState) => state.phone
  );
  const dispatch: AppDispatch = useDispatch();
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
    if (phoneNumber.length < 9) {
      dispatch(action.add(value));
    }
  }

  function handleDelete() {
    dispatch(action.erase());
  }

  function handleHang() {
    dispatch(action.hang());
    console.log("sexos");
  }

  function handleCall() {
    dispatch(action.call());
    console.log("bombas");
  }

  return {
    screen: phoneNumber,
    iscalling: iscalling,
    handleAddNumber,
    handleDelete,
    handleHang,
    handleCall,
    phoneNumbers,
  };
}
