import styles from "styles/Components.module.css";
import { KeyboardEvent, useState } from "react";
import React from "react";
import { OutCommands, Stack, About, Contact, Projects } from "components";

type Command = { command: string; message: () => JSX.Element };
export const ALL_COMMANDS: Command[] = [
  { command: "commands", message: OutCommands },
  { command: "stack", message: Stack },
  { command: "about", message: About },
  { command: "contact", message: Contact },
  { command: "projects", message: Projects },
];

const Err = () => <p style={{ color: "var(--red)" }}>command not found</p>;

type ReactiveInput = {
  enterCb: () => void;
};

export const Input: React.FC<ReactiveInput> = ({ enterCb }) => {
  const [command, setCommand] = useState("");
  const [isCommandValid, setIsCommandValid] = useState(true);
  const [message, setMessage] = useState<{ component: () => JSX.Element }>();
  const [disabled, setIsDisabled] = useState(false);

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      const cmd = ALL_COMMANDS.find((c) => c.command === command);
      if (cmd) {
        // if there was a command and a message found
        setIsCommandValid(true);
        setMessage({ component: cmd.message });
      } else if (command) {
        setIsCommandValid(false);
        setMessage({ component: Err });
      }
      enterCb();
      // disable the input after the user has pressed enter
      setIsDisabled(true);
    }
  }

  return (
    <div>
      <div className="flex items-center">
        <p
          className={`${
            isCommandValid ? "text-green-400" : "text-rose-400"
          } mr-4`}
        >
          {" "}
          {">"}{" "}
        </p>
        <p className="text-indigo-300">you@metaverse</p>
        <input
          className="bg-transparent border-none text-white ml-3 focus:border-noe focus:outline-none"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
          spellCheck={false}
          disabled={disabled}
          autoFocus
        />
      </div>
      {message ? React.createElement(message.component) : null}
    </div>
  );
};
