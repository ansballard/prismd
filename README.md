# Prismd

This is a library-independent jsx component for rendering markdown, as well as highlighting code blocks within using prismjs

```js
import { h, render } from "preact";
import "prismjs/themes/prism-okaidia.css";
import { Prismd } from "prismd/dist/prismd.preact.mjs";

const markdown = (
`# Hello!
_This is markdown, in a js codeblock, in a markdown file_
**is this meta enough?**
`);

render(<Prismd content={markdown} />, document.getElementById("root"));
```

```
import { h, render } from "preact";
import "prismjs/themes/prism-okaidia.css";
import { Prismd } from "prismd/dist/prismd.preact.mjs";

const markdown = (
`# Hello!
_This is markdown, in a js codeblock, in a markdown file_
**is this meta enough?**
`);

render(<Prismd content={markdown} />, document.getElementById("root"));
```

You can also use react via `prismd.dist/prismd.react.mjs`, or provide your own `h` and `useCallback` methods to `prismd/dist/prismd.builder.mjs`.