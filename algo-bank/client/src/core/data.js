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
          name: "runningSum",
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
          name: "divisorGame",
          body: solutions.divisorGame.toString(),
          explanation: `/*
          Input: N = 2
          divisorGame(N);
          Expected: true
          Explanation: Alice wins only when N is even:
          1. Alice chooses 1
          2. 2 - 1 = 1 (new N)
          3. Bob has no move at this point because 1 - 1 === 0
          */`
        } 
      },
      {
        id: "2",
        name: "Kids With the Greatest Number of Candies",
        url: "https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/",
        tags: [Tag.Array],
        difficulty: Difficulty.Easy,
        solution: {
          name: "kidsWithCandies",
          body: solutions.kidsWithCandies.toString(),
          explanation: `/*
          Input: candies = [2,5,1,3], extraCandies = 3
          kidsWithCandies(candies, extraCandies);
          Output: [true,true,false,true] 
          Explanation: First we'd get the kid who has the max number of candies.
          Next, walk through the input array and check whether
          the i-th kid's candies + extraCandies >= maxCandies.
          If that's the case, than the i-th kid can have max number of candies
          */`
        } 
      },
      {
        id: "3",
        name: "Richest Customer Wealth",
        url: "https://leetcode.com/problems/richest-customer-wealth/",
        tags: [Tag.Array],
        difficulty: Difficulty.Easy,
        solution: {
          name: "maximumWealth",
          body: solutions.maximumWealth.toString(),
          explanation: `/*
          Input: accounts = [[1,5],[7,3],[3,5]]
          maximumWealth(accounts);
          Output: 10
          Explanation:
          1. Walk through the input and sum the wealths of each customer
          i.e. 1 + 5 = 6, 7 + 3 = 10, 3 + 5 = 8 -> ([6, 10, 8])
          2. get the max wealth out of [6, 10, 8], which is 10 in this case
          */`
        } 
      },
      {
        id: "4",
        name: "Shuffle the Array",
        url: "https://leetcode.com/problems/shuffle-the-array/",
        tags: [Tag.Array],
        difficulty: Difficulty.Easy,
        solution: {
          name: "shuffle",
          body: solutions.shuffle.toString(),
          explanation: `/*
          Input: nums = [1,2,3,4,5,6], n = 3
          shuffle(nums, n);
          Output: [1,4,2,5,3,6]
          Explanation: Walk through nums array n times by pushing i-th and (n + i)-th elements followed by each other
          */`
        } 
      }
    ]
  };
};
