import { Button, ClickAwayListener, Link, Popper } from "@material-ui/core";
import React, { MouseEvent, useState } from "react";

import { ProblemSolution,Solution } from "./Solution";

interface OwnProps {
  name: string;
  href: string;
  solution: ProblemSolution;
  difficulty: Difficulty;
  tags: Tag[];
}

export enum Difficulty {
  Easy = "Easy",
  Medium = "Medium",
  Hard = "Hard"
}

export enum Tag {
  Array = "Array",
  DynamicProgramming = "DynamicProgramming"
}

export const Problem = (props: OwnProps) => {
  const { href, solution, name } = props;

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
          href={href}>
          {name}
        </Link>
        <div style={{ marginTop: 20 }}>
          <Button variant="outlined" onClick={onShowSolutionClick}>Show Solution</Button>
          <Popper
            placement="bottom"
            open={isOpen}
            anchorEl={anchorEl}
            modifiers={{
              flip: { enabled: true },
              arrow: { enabled: true }
            }}>
            <Solution solution={solution}/>
          </Popper>
        </div>
      </div>
    </ClickAwayListener>
  );
};
