import { deleteIndent } from "./utils/strings";

export const solutions = {
  runningSum: deleteIndent(function(nums) {
    for (let i = 1; i < nums.length; ++i) {
      nums[i] = nums[i] + nums[i - 1];
    }
  
    return nums;
  }.toString()),
  
  divisorGame: deleteIndent(function(N) {
    return N % 2 === 0;
  }.toString()),
  
  kidsWithCandies: deleteIndent(function(candies, extraCandies) {
    let maxCandies = 0;
  
    candies.forEach((numCandies) => {
      if (maxCandies < numCandies) {
        maxCandies = numCandies;
      }
    });
    for (let i = 0; i < candies.length; ++i) {
      candies[i] = candies[i] + extraCandies >= maxCandies;  
    }
    
    return candies;
  }.toString())
};

