import { PhoneContext } from "../../context/phone.context";
import { useContext } from "react";

export function Action() {
  const {
    phoneContext: { screen, isCalling },
  } = useContext(PhoneContext);
  return (
    <>
      <a
        href="#"
        className={`call ${
          isCalling ? "" : screen.length === 9 ? "active" : ""
        }`}
      >
        Call
      </a>
      <a href="#" className={`hang ${isCalling ? "active" : ""}`}>
        Hang Up
      </a>
    </>
  );
}
