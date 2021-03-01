import { Grid } from "@material-ui/core";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../core/store";
import { RequestState } from "../../core/utils/request";
import { ProblemBox } from "./ProblemBox";
import { Problem } from "./store/Problem.model";
import { ProblemState, setRequestState } from "./store/problemSlice";

type GridSize =
  | boolean
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | "auto"
  | undefined;

const pageSize = 40;

export const ProblemBoard = () => {
  const md = 3;
  const lg = 2;
  const maxWidth = 400;
  const minWidth = 200;

  const dispatch = useDispatch();
  const { problems, requestState } = useSelector<RootState, ProblemState>(
    (state) => state.problem
  );

  const phrase = useSelector<RootState, string>((state) => state.search.phrase);

  const [searchedProblems, setSearchedProblems] = useState<Problem[]>(problems);

  const [xs, setXS] = useState<GridSize>(6);
  const [sm, setSM] = useState<GridSize>(4);

  useEffect(() => {
    const handleResize = () => {
      setSM(window.innerWidth < 650 ? 6 : 4);
      setXS(window.innerWidth < 450 ? 12 : 6);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  useLayoutEffect(() => {
    if (phrase) {
      const lowerCase = phrase.toLowerCase();
      const filtered = problems.filter(
        (problem) =>
          problem.displayId.startsWith(lowerCase) ||
          problem.title.includes(lowerCase)
      );
      dispatch(setRequestState(RequestState.Loading));
      setTimeout(() => {
        setSearchedProblems(filtered.slice(0, pageSize));
        dispatch(setRequestState(RequestState.Ready));
      }, 300);
    } else {
      setSearchedProblems(problems.slice(0, pageSize));
    }
  }, [phrase, problems, dispatch]);

  const isLoading =
    requestState === RequestState.Loading || requestState === RequestState.None;

  return (
    <>
      {isLoading && <div>Loading ...</div>}
      {requestState === RequestState.Ready && (
        <Grid
          container
          spacing={3}
          style={{ paddingTop: 24, paddingBottom: 24 }}>
          {searchedProblems.map(
            ({ id, displayId, title, url, difficulty, tags, solution }) => {
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
                    displayId={displayId}
                    url={url}
                    title={title}
                    difficulty={difficulty}
                    tags={tags}
                    solution={solution}/>
                </Grid>
              );
            }
          )}
        </Grid>
      )}
      {requestState === RequestState.Failure && (
        <div>Something went wrong while loading data</div>
      )}
      {requestState === RequestState.Ready && searchedProblems.length === 0 && <div>Nothing to show !!!</div>}
    </>
  );
};
