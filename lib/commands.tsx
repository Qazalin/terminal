import { ReactElement } from "react";
import {
  Commands as OutCommands,
  Stack,
  Projects,
  About,
  Contact,
} from "components";

// The actual terminal commands
export type Command = {
  command: string;
  message: ReactElement;
};

export const Commands: Command[] = [
  { command: "commands", message: <OutCommands /> },
  { command: "stack", message: <Stack /> },
  { command: "about", message: <About /> },
  { command: "contact", message: <Contact /> },
  { command: "projects", message: <Projects /> },
];

// just info about the commands
type CommandInfo = { cmd: string; desc: string };

export const allCommands: CommandInfo[] = [
  { cmd: "stack", desc: "view my tech stack" },
  { cmd: "about", desc: "more about me" },
  { cmd: "contact", desc: "let's get to know each other!" },
  { cmd: "projects", desc: "may -many- side-projects" },
];
