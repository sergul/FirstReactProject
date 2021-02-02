import { Grid } from "@material-ui/core";
import axios, { AxiosError, AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";

import { ProblemBox, ProblemList } from "./ProblemBox";

export const ProblemBoard = () => {
  const md = 3;
  const sm = 6;
  const xs = 12;
  const lg = 2;
  const maxWidth = 400;
  const minWidth = 300;
  // const problems = useMemo(() => getProblems(), []);
  const [problems, setProblems] = useState<ProblemList | undefined>();

  // Requests problems data
  useEffect(() => {
    axios
      .get("/api/problems")
      .then((response: AxiosResponse) => {
        setProblems(JSON.parse(response.data));
      })
      .catch((error: AxiosError) => {
        console.log(error.response?.statusText, error.response?.status);
      });
  }, []);

  return (
    <div style={{ padding: 16 }}>
      <Grid container spacing={3}>
        {problems?.leetcode.map(
          ({ id, name, url, difficulty, tags, solution }) => {
            return (
              <Grid
                key={id}
                item
                xs={xs}
                sm={sm}
                md={md}
                lg={lg}
                style={{ maxWidth, minWidth }}>
                <ProblemBox
                  id={id}
                  url={url}
                  name={name}
                  difficulty={difficulty}
                  tags={tags}
                  solution={solution}/>
              </Grid>
            );
          }
        )}
      </Grid>
    </div>
  );
};
