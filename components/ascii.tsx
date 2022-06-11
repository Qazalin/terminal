import { Fragment } from "react";
import styles from "styles/Components.module.css";

export const Ascii: React.FC<{ contents: string[] }> = ({ contents }) => {
  return (
    <Fragment>
      {contents.map((c, i) => (
        <pre className={styles.ascii} key={i}>
          {c}
        </pre>
      ))}
    </Fragment>
  );
};
