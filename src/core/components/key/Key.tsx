import { usePhone } from "../../../features/hooks/use.phone";

type PropsType = {
  item: string;
};

export function Key({ item }: PropsType) {
  const { isCalling, handleAddNumber, handleDelete } = usePhone();

  function handleClick() {
    if (!isCalling) handleAddNumber(item);
  }

  function handleDeleteClick() {
    if (!isCalling) handleDelete();
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
