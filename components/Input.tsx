import styles from "styles/Components.module.css";
import { useState } from "react";

export const Input = () => {
  const [command, setCommand] = useState();
  return (
    <div className={styles.inputWrapper}>
      <p
        style={{
          color: "var(--green)",
          fontWeight: "bold",
          marginRight: "10px",
        }}
      >
        {" "}
        {"->"}{" "}
      </p>
      <p style={{ color: "var(--teal2)", fontWeight: "bold" }}> terminal</p>
      <input
        className={styles.input}
        spellCheck={false}
        autoFocus={true}
        onBlur={({ target }) => target.focus()}
      />
    </div>
  );
};
