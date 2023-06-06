import { useSelector, useDispatch } from "react-redux";
import * as action from "../features/redux/phone.slice";
import { AppDispatch, RootState } from "../core/components/store/store";

export function usePhone() {
  // const [phoneState, dispatch] = useReducer(phoneReducer, initialState);
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

  // function handleDelete() {
  //   dispatch(action.deleteNumberAction());
  // }

  return {
    screen: phoneNumber,
    iscalling: iscalling,
    handleAddNumber,
    phoneNumbers,
  };
}
