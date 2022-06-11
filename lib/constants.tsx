import { ReactElement } from "react";

export type Command = {
  command: string;
  message: ReactElement;
};

export const Commands: Command[] = [
  { command: "commands", message: <div>hello</div> },
  { command: "hello", message: <div>hi</div> },
];
