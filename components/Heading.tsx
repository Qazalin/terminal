import styles from "styles/Components.module.css";

export const Heading = () => {
  return (
    <div className={styles.heading}>
      <p className={styles.intro}>gm frens</p>
      <p className={styles.intro}>
        I&apos;m Qazal, I&apos;m a Web3 software engineer. I work on researching
        oppurtunities in Web3, curatig delightful products and building nice
        user experiences.
      </p>
      <p>
        Type <span style={{ color: "var(--blue)" }}>commands</span> to see the
        available commands
      </p>
    </div>
  );
};
