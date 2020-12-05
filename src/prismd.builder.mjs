//@ts-check
import snark from "snarkdown";
import { highlight, languages } from "prismjs";

export const PrismdBuilder = ({ h, useCallback }) => ({ content }) => {
  const ref = useCallback(node => {
    if (node !== null) {
      node.innerHTML = snark(content);
      const codeBlocks = node.querySelectorAll("pre > code");
      let language, firstClass;
      for(const codeBlock of codeBlocks) {
        firstClass = codeBlock.classList[0];
        if(firstClass?.indexOf("language-") === 0) {
          codeBlock.parentNode.classList.add(firstClass);
          language = codeBlock.classList[0].slice("language-".length);
          codeBlock.innerHTML = highlight(codeBlock.innerText, languages[language], language);
        }
      }
    }
  }, []);
  return h("div", { className: "markdown-wrapper", ref } );
};
