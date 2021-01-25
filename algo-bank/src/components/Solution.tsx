import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { Explanation } from "./Explanation";

export interface ProblemSolution {
  name: string;
  body: string;
  explanation?: string;
}

interface OwnProps {
  solution: ProblemSolution;
}

export const Solution = (props: OwnProps) => {
  const [showExplanation, setShowExplanation] = useState(false);
  const { solution } = props;
  
  return (
    <>
      <SyntaxHighlighter
        customStyle={{
          margin: "10px 0 -4px 0",
          overflowX: "hidden", maxHeight: 400, maxWidth: 600, minWidth: 300, display: "inline-block" 
        }}
        language="javascript"
        style={a11yDark}
        wrapLongLines>
        {`${solution.name} = ${solution.body};`}
      </SyntaxHighlighter>
      <Button variant="outlined" style={{ display: "block" }} onClick={() => setShowExplanation(!showExplanation)}>Show Explanation</Button>
      {showExplanation && <Explanation text={solution.explanation}/>}
    </>
  );
};
