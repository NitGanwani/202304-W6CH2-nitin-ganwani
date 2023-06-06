import { Key } from "../key/Key";
import { usePhone } from "../../../hooks/use.phone";

export function Keyboard() {
  const { phoneNumbers } = usePhone();
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
