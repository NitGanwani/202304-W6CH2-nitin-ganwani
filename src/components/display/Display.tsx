import { PhoneContext } from "../../context/phone.context";
import { useContext } from "react";

export function Display() {
  const {
    phoneContext: { screen },
  } = useContext(PhoneContext);

  return <span className="'number">{screen}</span>;
}
