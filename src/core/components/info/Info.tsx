import { PhoneContext } from "../../context/phone.context";
import { useContext } from "react";

export function Info() {
  const {
    phoneContext: { isCalling },
  } = useContext(PhoneContext);
  return <span className="message">{isCalling ? "Calling" : ""}</span>;
}
