import { usePhone } from "../../../hooks/use.phone";

type PropsType = {
  item: string;
};

export function Key({ item }: PropsType) {
  const { iscalling, handleAddNumber, handleDelete } = usePhone();

  function handleClick() {
    if (!iscalling) handleAddNumber(item);
  }

  function handleDeleteClick() {
    if (!iscalling) handleDelete();
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
