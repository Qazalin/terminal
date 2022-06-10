import { Fragment } from "react";

export const Ascii: React.FC<{ contents: string[] }> = ({ contents }) => {
  return (
    <Fragment>
      {contents.map((c, i) => (
        <pre key={i}>{c}</pre>
      ))}
    </Fragment>
  );
};
