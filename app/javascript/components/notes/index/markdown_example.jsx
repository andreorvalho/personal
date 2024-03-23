import React from 'react';
import Markdown from "react-markdown-it";

const markdown = `**Hello there!**

This a ~~dev~~ _Payspace_!

- Add your stuff!
- Edit your stuff!
- Destroy your stuff!

1. Share.
2. Like.
3. Subscribe.`;

const MarkdownExample = () => {
  return (
    <div className="App">
      <Markdown>{markdown}</Markdown>
    </div>
  );
}

export default MarkdownExample
