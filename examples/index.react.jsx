import React, { useEffect, useState, useCallback } from "react";
import ReactDOM from "react-dom";
import { Prismd } from "prismd/dist/prismd.react.mjs";
import { PrismdBuilder } from "prismd";
import marked from "marked";

import staticReadme from "./README.md";

const PrismdMarked = PrismdBuilder({ useCallback, h: React.createElement, markdown: marked });

const Wrapper = () => {
  const [dynamicReadme, setDynamicReadme] = useState("");
  useEffect(() => {
    const fetcher = async () => {
      const response = await fetch("./README.md");
      const text = await response.text();
      setDynamicReadme(text);
    };
    fetcher();
  }, []);
  return (
    <div>
      <h1>React Renderers!</h1>
      <h2>The static version</h2>
      <br />
      <Prismd content={staticReadme} />
      <hr />
      <h2>The dynamic version</h2>
      <br />
      <Prismd content={dynamicReadme} />
      <hr />
      <h2>The version using marked</h2>
      <PrismdMarked content={dynamicReadme} />
    </div>
  );
};

ReactDOM.render(<Wrapper />, document.getElementById("react-root"));
