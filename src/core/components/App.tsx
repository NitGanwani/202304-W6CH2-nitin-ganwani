import { Info } from "./info/Info";
import { Keyboard } from "./keyboard/Keyboard";
import "../styles.css";
import { Actions } from "./actions/actions";

export function App() {
  return (
    <>
      <Info></Info>
      <main className="phone">
        <Keyboard></Keyboard>
        <Actions></Actions>
      </main>
    </>
  );
}
