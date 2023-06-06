import { PhoneContext } from "../../context/phone.context";
import { useContext } from "react";

type PropsType = {
  item: string;
};

export function Key({ item }: PropsType) {
  const {
    phoneContext: { handleAddNumber, isCalling, handleDelete },
  } = useContext(PhoneContext);

  function handleClick() {
    if (!isCalling) handleAddNumber(item);
  }

  function handleDeleteClick() {
    if (!isCalling) handleDelete;
  }

  return (
    <>
      <li>
        {item !== "delete" ? (
          <button className="key" onClick={handleClick}>
            {item}
          </button>
        ) : (
          <button className="key big" onClick={handleDeleteClick}>
            {item}
          </button>
        )}
      </li>
    </>
  );
}
