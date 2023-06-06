import { add } from "../../../features/redux/phone.slice";
import { usePhone } from "../../../hooks/use.phone";

type PropsType = {
  item: string;
};

export function Key({ item }: PropsType) {
  const { iscalling } = usePhone();

  function handleClick() {
    if (!iscalling) add(item);
  }

  // function handleDeleteClick() {
  //   if (!iscalling) handleDelete;
  // }

  return (
    <>
      <li>
        {item !== "delete" ? (
          <button className="key" onClick={handleClick}>
            {item}
          </button>
        ) : (
          <button className="key big">{item}</button>
        )}
      </li>
    </>
  );
}
