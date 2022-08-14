import styles from "styles/Components.module.css";

// just info about the commands
type CommandInfo = { cmd: string; desc: string };

export const allCommands: CommandInfo[] = [
  { cmd: "stack", desc: "view my tech stack" },
  { cmd: "about", desc: "more about me" },
  { cmd: "contact", desc: "let's get to know each other!" },
  { cmd: "projects", desc: "may -many- side-projects" },
  /* {
    cmd: "coding playlist",
    desc: "lofi and game soundtracks, ikr we chil and fight at the same time",
  }, */
];

export const OutCommands = () => {
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
