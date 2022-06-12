import { Heading, Name } from "components";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import fs from "fs";
import path from "path";
import { Input } from "components/Input";
import { useState } from "react";

const Home: NextPage<{ contents: string[] }> = ({ contents }) => {
  const [terminalLines, setTerminalLines] = useState<number>(1);
  const addNewLineCallback = () => {
    setTerminalLines((val) => val + 1);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>terminal✨</title>
        <meta name="description" content="Portfolio terminal for geeks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.terminal}>
        <Name contents={contents} />
        <Heading />
        {[...Array(terminalLines)].map((_x, i) => (
          <Input key={`input-${i}`} enterCb={addNewLineCallback} />
        ))}
      </div>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const contentPath = path.join(process.cwd(), "components/ascii.txt");
  const content = fs.readFileSync(contentPath, "utf-8");
  const contents: string[] = [];
  content.split("\n").map((c) => {
    contents.push(c);
  });
  return {
    props: {
      contents,
    },
  };
}
