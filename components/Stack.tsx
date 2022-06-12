import {
  ReactLogo,
  TSLogo,
  NextJsLogo,
  GQLLogo,
  SolidityLogo,
  PythonLogo,
} from "./icons";
import styles from "styles/Components.module.css";

export const Stack = () => {
  return (
    <div className={styles.stackWrap}>
      <p>
        my stack is always evolving as I learn about new and cool tech.
        Currently, I&apos;m obsessed with these langs and frameworks:
      </p>
      <div className={styles.stack}>
        <TSLogo />
        <ReactLogo />
        <NextJsLogo />
        <GQLLogo />
        <SolidityLogo />
        <PythonLogo />
      </div>
    </div>
  );
};
