import { Container } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { ProblemBoard } from "./problem/ProblemBoard";
import { getLeetCodeProblems } from "./problem/store/problemSlice";
import { SearchBox } from "./search/SearchBox";

export const Home = () => {
  const dispatch = useDispatch();

  // Requests problems
  useEffect(() => {
    dispatch(getLeetCodeProblems());
  }, [dispatch]);
  
  return (
    <Container maxWidth="lg" style={{ paddingTop: 24 }}>
      <SearchBox />
      <ProblemBoard />
    </Container>
  );
};
