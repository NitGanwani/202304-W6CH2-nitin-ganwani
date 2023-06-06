import { usePhone } from "../../../hooks/use.phone";

export function Info() {
  const { iscalling } = usePhone();
  return <span className="message">{iscalling ? "Calling" : ""}</span>;
}
