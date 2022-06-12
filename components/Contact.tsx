import { Discord, Github, LinkedIn, Twitter } from "./icons";
import styles from "styles/Components.module.css";

export const Contact = () => {
  return (
    <div className={styles.stackWrap}>
      <p>
        I hang out on Discord, Github and Twitter. I also have{" "}
        <a
          href="https://qazal.vercel.app/"
          style={{ color: "var(--blue)" }}
          target="blank"
        >
          a proper website{" "}
        </a>
        where I post about interesting Web3 stuff
      </p>
      <div className={styles.stack}>
        <Twitter />
        <Discord />
        <LinkedIn />
        <Github />
      </div>
    </div>
  );
};
