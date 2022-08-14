import { Heading, Name } from "components";
import type { NextPage } from "next";
import Head from "next/head";
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
    <div className="font-mono lg:max-w-7xl">
      <Head>
        <title>terminal </title>
        <meta name="description" content="qazalin's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="px-4">
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
