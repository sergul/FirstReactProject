import { Grid } from "@material-ui/core";
import axios, { AxiosError, AxiosResponse } from "axios";
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

  const onTestAPI = () => {
    axios.get("/api/problems")
      .then((response: AxiosResponse) => {
        console.log(response.data);
      })
      .catch((error: AxiosError) => {
        console.log(error.response?.statusText, error.response?.status);
      });
  };

  return (
    <div style={{ padding: 16 }}>
      <button onClick={onTestAPI}>Test api</button>
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
