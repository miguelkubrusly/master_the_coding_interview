"use strict";
function solution(nums, target) {
    if (nums.length < 2) {
        return null;
    }
    // brute force solution
    // ------------------------ //
    for (let p1 = 0; p1 < nums.length - 1; p1++) {
        const num1 = nums[p1];
        for (let p2 = 1; p2 < nums.length; p2++) {
            const num2 = nums[p2];
            if (num2 == target - num1) {
                return [p1, p2];
            }
        }
    }
    return null;
}
// tests
const a = solution([1, 2, 4, 5, 6], 9);
console.log('====================================');
console.log('Should be [2,3]:');
console.log(a);
const b = solution([1, 8, 23, 2, 45, 4, 11, 2], 11);
console.log('====================================');
console.log('Should be null:');
console.log(b);
const c = solution([], 0);
console.log('====================================');
console.log('Should be null:');
console.log(c);
const d = solution([2, 4, 6, 7], 9);
console.log('====================================');
console.log('Should be [0,3]:');
console.log(d);
const e = solution([100, 101, 102, 2], 102);
console.log('====================================');
console.log('Should be [0,3]:');
console.log(e);
