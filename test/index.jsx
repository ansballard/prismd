import { h, render } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { Prismd } from "../dist/prismd.preact.mjs";

import staticReadme from "./README.md";

const Wrapper = () => {
  const [dynamicReadme, setDynamicReadme] = useState("");
  useEffect(() => {
    const fetcher = async () => {
      const response = await fetch("./README.md");
      setDynamicReadme(await response.text());
    };
    fetcher();
  }, []);
  return  (
    <div>
      <h1>Hello World!</h1>
      <h2>The static version</h2>
      <Prismd content={staticReadme} />
      <h2>The dynamic version</h2>
      <Prismd content={dynamicReadme} />
    </div>
  );
};

render(<Wrapper />, document.getElementById("root"));
