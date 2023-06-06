import { usePhone } from "../../../features/hooks/use.phone";

export function Info() {
  const { isCall } = usePhone();
  return <span className="message">{isCall ? "Calling" : ""}</span>;
}
