import { usePhone } from "../../../hooks/use.phone";

export function Action() {
  const { iscalling, screen } = usePhone();
  return (
    <>
      <a
        href="#"
        className={`call ${
          iscalling ? "" : screen.length === 9 ? "active" : ""
        }`}
      >
        Call
      </a>
      <a href="#" className={`hang ${iscalling ? "active" : ""}`}>
        Hang Up
      </a>
    </>
  );
}
