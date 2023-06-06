import { usePhone } from "../../../features/hooks/use.phone";

export function Action() {
  const { isCall, screen, handleHang, handleCall } = usePhone();

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
        className={`call ${isCall ? "" : screen.length === 9 ? "active" : ""}`}
        onClick={handleCallClick}
      >
        Call
      </a>
      <a
        href="#"
        className={`hang ${isCall ? "active" : ""}`}
        onClick={handleHangClick}
      >
        Hang Up
      </a>
    </>
  );
}
