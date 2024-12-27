"use strict";
function twoSum(nums, target) {
    // BRUTE FORCE SOLUTION
    // O(n**2) - O(1)
    // ------------------------ //
    // for (let p1 = 0; p1 < nums.length-1; p1++) {
    //   const numToFind = target - nums[p1]
    //   for (let p2 = p1+1; p2 < nums.length; p2++) {
    //     if (nums[p2] == numToFind){
    //       return [p1,p2]
    //     }
    //   }
    // }
    // return null
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
    // OPTIMAL SOLUTION
    // O(n) - O(1)
    // ------------------------ //
    for (let p1 = 0; p1 < nums.length; p1++) {
        const numToFind = target - nums[p1];
        const sortedNums = nums.slice(p1 + 1).sort((a, b) => a - b);
        let start = 0, end = sortedNums.length - 1;
        while (start < end) {
            const middle = Math.floor(end - start / 2);
            const middle_num = sortedNums[middle];
            if (middle_num < numToFind) {
                start = middle + 1;
            }
            else if (middle_num > numToFind) {
                end = middle - 1;
            }
            else {
                return [p1, nums.indexOf(middle_num)];
            }
        }
    }
    return null;
}
// tests
const a = twoSum([1, 2, 4, 5, 6], 9);
console.log("====================================");
console.log("Should be [2,3]:");
console.log(a);
const b = twoSum([1, 8, 23, 2, 45, 4, 11, 2], 11);
console.log("====================================");
console.log("Should be null:");
console.log(b);
const c = twoSum([], 0);
console.log("====================================");
console.log("Should be null:");
console.log(c);
const d = twoSum([2, 4, 6, 7], 9);
console.log("====================================");
console.log("Should be [0,3]:");
console.log(d);
const e = twoSum([100, 101, 102, 2], 102);
console.log("====================================");
console.log("Should be [0,3]:");
console.log(e);
