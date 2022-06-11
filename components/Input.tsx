import styles from "styles/Components.module.css";
import {
  EventHandler,
  KeyboardEvent,
  KeyboardEventHandler,
  useEffect,
  useRef,
  useState,
  ChangeEvent,
} from "react";
import { Commands } from "lib";

export const Input = () => {
  const [command, setCommand] = useState("");
  const [isCommandValid, setIsCommandValid] = useState(true);
  const [message, setMessage] = useState("");
  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      Commands.forEach((c) => {
        if (c.command === command) {
          setIsCommandValid(true);
          setMessage(c.message);
        } else {
          setIsCommandValid(false);
          setMessage("command not found");
        }
      });
    }
  }
  return (
    <div className={styles.mainTerminal}>
      <div className={styles.inputWrapper}>
        <p
          style={{
            color: isCommandValid ? "var(--green)" : "var(--red)",
            fontWeight: "bold",
            marginRight: "10px",
          }}
        >
          {" "}
          {"->"}{" "}
        </p>
        <p style={{ color: "var(--teal2)", fontWeight: "bold" }}> terminal</p>
        <input
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
          className={styles.input}
          spellCheck={false}
          autoFocus={true}
          onBlur={({ target }) => target.focus()}
        />
      </div>
      {message ? (
        <div
          style={{
            color: isCommandValid ? "white" : "var(--red)",
          }}
        >
          {message}
        </div>
      ) : null}
    </div>
  );
};
