import styles from "styles/Components.module.css";
import { allCommands } from "lib";

export const Commands = () => {
  return (
    <div>
      {allCommands.map((c, i) => (
        <div key={`command-${i}`} className={styles.commandsList}>
          <p style={{ color: "var(--yellow)" }}>{c.cmd}</p>
          <p>{c.desc}</p>
        </div>
      ))}
    </div>
  );
};
