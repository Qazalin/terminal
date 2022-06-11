import { Ascii, Heading } from "components";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import fs from "fs";
import path from "path";
import { Input } from "components/Input";
import { useState, ReactElement } from "react";

const Home: NextPage<{ contents: string[] }> = ({ contents }) => {
  const addNewLineCallback = () => {
    console.log("my child called me");
    setTerminalLines(
      terminalLines.concat(<Input enterCb={addNewLineCallback} />)
    );
    console.log(terminalLines);
  };
  const [terminalLines, setTerminalLines] = useState<ReactElement[]>([
    <Input key={Math.random()} enterCb={addNewLineCallback} />,
  ]);

  return (
    <div className={styles.container}>
      <Head>
        <title>qazalin</title>
        <meta name="description" content="Portfolio terminal for geeks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.terminal}>
        <Ascii contents={contents} />
        <Heading />
        {terminalLines}
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
