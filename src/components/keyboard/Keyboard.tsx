import { useContext } from "react";
import { PhoneContext } from "../../context/phone.context";
import { Key } from "../key/Key";

export function Keyboard() {
  const {
    phoneContext: { phoneNumbers },
  } = useContext(PhoneContext);
  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        {phoneNumbers.map((number) => (
          <Key key={number} item={number}></Key>
        ))}
      </ol>
    </div>
  );
}
