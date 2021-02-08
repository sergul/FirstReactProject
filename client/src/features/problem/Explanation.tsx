import React  from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import { deleteIndent } from "../../core/utils/strings";

export const Explanation = ({ text = "" }: {text?: string}) => {
  return (
    <div>
      <SyntaxHighlighter
        customStyle={{ marginTop: 0, overflowX: "hidden",  maxHeight: 400, maxWidth: 600, minWidth: 300, display: "inline-block" }}
        language="javascript"
        style={a11yDark}
        wrapLongLines>
        {deleteIndent(text, 10)}
      </SyntaxHighlighter>
    </div>
    
  );
};
