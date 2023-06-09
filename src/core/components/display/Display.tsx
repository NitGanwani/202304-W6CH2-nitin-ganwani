import { usePhone } from "../../../features/hooks/use.phone";

export function Display() {
  const { screen } = usePhone();

  return <span className="'number">{screen}</span>;
}
