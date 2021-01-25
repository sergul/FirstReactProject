import { Difficulty, Tag } from "../components/Problem";
import { solutions } from "./solutions";

export const getProblems = () => {
  return {
    leetcode:
    [
      {
        id: "0",
        name: "Running Sum of 1d Array",
        url: "https://leetcode.com/problems/running-sum-of-1d-array/",
        tags: [Tag.Array],
        difficulty: Difficulty.Easy,
        solution: {
          name: "var runningSum",
          body: solutions.runningSum.toString(),
          explanation: `/*
          Input: nums = [1,2,3,4]
          runningSum(nums);
          Expected: [1,3,6,10]
          Explanation: Below steps show how the solution code works:
          i0. 1 + SPE -> 0 === 1
          i1. 2 + SPE -> 1 === 3
          i2. 3 + SPE -> 3 === 6
          i3. 4 + SPE -> 6 === 10
          */`
        } 
      },
      {
        id: "1",
        name: "Divisor Game",
        url: "https://leetcode.com/problems/divisor-game/",
        tags: [Tag.DynamicProgramming],
        difficulty: Difficulty.Easy,
        solution: {
          name: "var divisorGame",
          body: solutions.divisorGame.toString()
        } 
      },
      {
        id: "2",
        name: "Kids With the Greatest Number of Candies",
        url: "https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/",
        tags: [Tag.Array],
        difficulty: Difficulty.Easy,
        solution: {
          name: "var kidsWithCandies",
          body: solutions.kidsWithCandies.toString()
        } 
      }
    ]
  };
};
