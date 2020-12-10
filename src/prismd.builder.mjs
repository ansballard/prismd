//@ts-check
import { highlight, languages } from "prismjs";

export const PrismdBuilder = ({ h, useCallback, markdown }) => ({ content }) => {
  const ref = useCallback(
    (node) => {
      if (node !== null && content) {
        node.innerHTML = markdown(content.replace(/\r/g, ""));
        const codeBlocks = node.querySelectorAll("pre > code");
        let language, firstClass;
        for (const codeBlock of codeBlocks) {
          firstClass = codeBlock.classList[0];
          if (firstClass?.indexOf("language-") === 0) {
            codeBlock.parentNode.classList.add(firstClass);
            language = codeBlock.classList[0].slice("language-".length);
            codeBlock.innerHTML = highlight(
              codeBlock.innerText,
              languages[language],
              language
            );
          }
        }
      }
    },
    [content]
  );
  return h("div", { className: "markdown-wrapper", ref });
};
