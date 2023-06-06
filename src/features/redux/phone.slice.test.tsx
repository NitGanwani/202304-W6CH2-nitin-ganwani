import { add, erase, hang, call, PhoneState } from "./phone.slice";
import slicePhone from "./phone.slice";

describe("Given a phone slice", () => {
  let initialState: PhoneState;
  describe("When it is instantiate", () => {
    beforeEach(() => {
      initialState = {
        phoneNumber: "",
        isCall: false,
      };
    });
    test("Then it should execute the add action", () => {
      const payload = "123";
      const expectedState = {
        phoneNumber: initialState.phoneNumber + payload,
        isCall: false,
      };
      expect(slicePhone(initialState, add(payload))).toEqual(expectedState);
    });
  });

  test("Then it should execute the erase action", () => {
    const expectedState = {
      phoneNumber: initialState.phoneNumber.substring(
        0,
        initialState.phoneNumber.length - 1
      ),
      isCall: false,
    };
    expect(slicePhone(initialState, erase())).toEqual(expectedState);
  });

  test("Then it should execute the hang action", () => {
    const expectedState = {
      phoneNumber: "",
      isCall: !initialState.isCall,
    };
    expect(slicePhone(initialState, hang())).toEqual(expectedState);
  });

  test("should handle the call action", () => {
    const expectedState = {
      phoneNumber: "",
      isCall: !initialState.isCall,
    };
    expect(slicePhone(initialState, call())).toEqual(expectedState);
  });
});
