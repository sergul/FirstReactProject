import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import { deleteIndent } from "../core/utils/strings";

export const Explanation = ({ text = "" }: {text?: string}) => {
  return (
    <div style={{ position: "absolute" }}>
      <SyntaxHighlighter customStyle={{ borderRadius: 4 }} language="javascript" style={a11yDark} wrapLongLines>
        {deleteIndent(text, 10)}
      </SyntaxHighlighter>
    </div>
    
  );
};
