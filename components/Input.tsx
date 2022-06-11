import styles from "styles/Components.module.css";
import { KeyboardEvent, useState } from "react";
import { Commands } from "lib";

type ReactiveInput = {
  enterCb: () => void;
};
export const Input: React.FC<ReactiveInput> = ({ enterCb }) => {
  const [command, setCommand] = useState("");
  const [isCommandValid, setIsCommandValid] = useState(true);
  const [message, setMessage] = useState("");
  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      Commands.forEach((c) => {
        if (c.command === command) {
          setIsCommandValid(true);
          setMessage(c.message);
        } else if (command) {
          setIsCommandValid(false);
          setMessage("command not found");
        }
      });
      enterCb();
      console.log("child: called my parent");
    }
  }
  return (
    <div>
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
