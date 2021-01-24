import { Grid } from "@material-ui/core";
import React, { useMemo } from "react";

import { getProblems } from "../core/data";
import { Problem } from "./Problem";

export const ProblemBoard = () => { 
  const md = 3;
  const sm = 6;
  const xs = 12;
  const lg = 2;
  const maxWidth = 400;
  const minWidth = 300;
  const problems = useMemo(() => getProblems(), []);
  return (
    <div style={{ padding: 20 }}>
      <Grid container spacing={3}>
        {problems.leetcode.map(({ id,  name, url, difficulty, tags, solution }) => {
          return (
            <Grid
              key={id}
              item
              xs={xs}
              sm={sm}
              md={md}
              lg={lg}
              style={{ maxWidth, minWidth }}>
              <Problem
                href={url}
                name={name}
                difficulty={difficulty}
                tags={tags}
                solution={{
                  name: solution.name,
                  body: solution.body,
                  explanation: solution.explanation
                }}/>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
