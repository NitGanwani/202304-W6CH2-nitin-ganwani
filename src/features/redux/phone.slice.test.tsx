import { add, erase, hang, call, PhoneState } from "./phone.slice";
import yourReducer from "./phone.slice";

describe("phone slice", () => {
  let initialState: PhoneState;
  describe("When...", () => {
    beforeEach(() => {
      initialState = {
        phoneNumber: "",
        isCalling: false,
      };
    });
    test("should handle the add action", () => {
      const payload = "123";
      const expectedState = {
        phoneNumber: initialState.phoneNumber + payload,
        iscalling: false,
      };
      expect(yourReducer(initialState, add(payload))).toEqual(expectedState);
    });
  });

  test("should handle the erase action", () => {
    const expectedState = {
      phoneNumber: initialState.phoneNumber.substring(
        0,
        initialState.phoneNumber.length - 1
      ),
      iscalling: false,
    };
    expect(yourReducer(initialState, erase())).toEqual(expectedState);
  });

  test("should handle the hang action", () => {
    const expectedState = {
      phoneNumber: "",
      iscalling: !initialState.isCalling,
    };
    expect(yourReducer(initialState, hang())).toEqual(expectedState);
  });

  test("should handle the call action", () => {
    const expectedState = {
      phoneNumber: "",
      iscalling: !initialState.isCalling,
    };
    expect(yourReducer(initialState, call())).toEqual(expectedState);
  });
});
