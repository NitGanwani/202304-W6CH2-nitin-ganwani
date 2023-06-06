import { usePhone } from "../../../features/hooks/use.phone";

type PropsType = {
  item: string;
};

export function Key({ item }: PropsType) {
  const { isCall, handleAddNumber, handleDelete } = usePhone();

  function handleClick() {
    if (!isCall) handleAddNumber(item);
  }

  function handleDeleteClick() {
    if (!isCall) handleDelete();
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
