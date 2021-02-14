import { Container } from "@material-ui/core";
import React from "react";

import { ProblemBoard } from "./problem/ProblemBoard";
import { SearchBox } from "./search/SearchBox";

export const Home = () => {
  
  return (
    <Container maxWidth="lg">
      <SearchBox />
      <ProblemBoard />
    </Container>
  );
};
