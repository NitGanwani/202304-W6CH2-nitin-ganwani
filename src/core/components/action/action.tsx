import { usePhone } from "../../../features/hooks/use.phone";

export function Action() {
  const { isCalling, screen, handleHang, handleCall } = usePhone();

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
          isCalling ? "" : screen.length === 9 ? "active" : ""
        }`}
        onClick={handleCallClick}
      >
        Call
      </a>
      <a
        href="#"
        className={`hang ${isCalling ? "active" : ""}`}
        onClick={handleHangClick}
      >
        Hang Up
      </a>
    </>
  );
}
