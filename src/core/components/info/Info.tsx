import { usePhone } from "../../../features/hooks/use.phone";

export function Info() {
  const { isCalling } = usePhone();
  return <span className="message">{isCalling ? "Calling" : ""}</span>;
}
