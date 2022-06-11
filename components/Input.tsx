import styles from "styles/Components.module.css";
import { KeyboardEvent, ReactElement, useState } from "react";
import { Commands } from "lib";

type ReactiveInput = {
  enterCb: () => void;
};
export const Input: React.FC<ReactiveInput> = ({ enterCb }) => {
  const [command, setCommand] = useState("");
  const [isCommandValid, setIsCommandValid] = useState(true);
  const [message, setMessage] = useState<ReactElement>();
  const [disabled, setIsDisabled] = useState(false);

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      const cmd = Commands.find((c) => c.command === command);
      if (cmd) {
        // if there was a command and a message found
        setIsCommandValid(true);
        setMessage(cmd.message);
      } else if (command) {
        setIsCommandValid(false);
        setMessage(<p>command not found</p>);
      }
      enterCb();
      // disable the input after the user has pressed enter
      setIsDisabled(true);
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
        <p style={{ color: "var(--teal2)", fontWeight: "bold" }}>
          you@metaverse
        </p>
        <input
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
          className={styles.input}
          spellCheck={false}
          disabled={disabled}
          autoFocus
        />
      </div>
      {message ? message : null}
    </div>
  );
};
