import { usePhone } from "../../../hooks/use.phone";

export function Action() {
  const { iscalling, screen, handleHang, handleCall } = usePhone();

  function handleHangClick() {
    handleHang();
  }

  function handleCallClick() {
    handleCall();
  }

  return (
    <>
      <a
        href="#"
        className={`call ${
          iscalling ? "" : screen.length === 9 ? "active" : ""
        }`}
        onClick={handleCallClick}
      >
        Call
      </a>
      <a
        href="#"
        className={`hang ${iscalling ? "active" : ""}`}
        onClick={handleHangClick}
      >
        Hang Up
      </a>
    </>
  );
}
