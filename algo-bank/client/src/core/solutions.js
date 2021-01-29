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
  }.toString()),

  maximumWealth: deleteIndent(function(accounts) {
    let maxWealth = 0;
  
    accounts.forEach((customer) => {
      const customerWealth = customer.reduce((sum, wealth) => sum + wealth);
      if (maxWealth < customerWealth) {
        maxWealth = customerWealth;
      }
    });
    
    return maxWealth;
  }.toString()),

  shuffle: deleteIndent(function(nums, n) {
    const shuffled = [];
    for (let i = 0; i < n ; ++i) {
      shuffled.push(nums[i], nums[n + i]);
    }

    return shuffled;
  }.toString())
};

