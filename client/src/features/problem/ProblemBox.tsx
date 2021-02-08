import { Button, ClickAwayListener, Link, Popper } from "@material-ui/core";
import React, { MouseEvent, useState } from "react";

import { Problem } from "./Problem.model";
import { Solution } from "./Solution";

export enum Difficulty {
  Easy = "Easy",
  Medium = "Medium",
  Hard = "Hard"
}

export enum Tag {
  Array = "Array",
  DynamicProgramming = "DynamicProgramming"
}

export const ProblemBox = (props: Problem) => {
  const { url, solution, name } = props;

  const [isOpen, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const onShowSolutionClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(!isOpen);
  };

  const onClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <div className="roboto" style={{ background: "lightBlue", padding: 10 }}>
        <Link
          target="_blank"
          rel="noreferrer"
          href={url}>
          {name}
        </Link>
        <div style={{ marginTop: 20 }}>
          <Button variant="outlined" onClick={onShowSolutionClick}>Show Solution</Button>
          {solution &&
          <Popper
            placement="bottom"
            open={isOpen}
            anchorEl={anchorEl}
            style={{ padding: "0 16px 0 16px" }}
            modifiers={{
              flip: { enabled: true },
              arrow: { enabled: true }
            }}>
            <Solution solution={solution}/>
          </Popper>}
        </div>
      </div>
    </ClickAwayListener>
  );
};
