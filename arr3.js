"use strict";
function trap(heights) {
    let totalWater = 0;
    // brute force
    for (let i = 1; i < heights.length - 1; i++) {
        const h = heights[i];
        let waterCol = 0;
        const maxBefore = Math.max(...heights.slice(0, i));
        const maxAfter = Math.max(...heights.slice(i + 1));
        if (maxBefore > h && maxAfter > h) {
            waterCol = Math.min(maxBefore, maxAfter) - h;
            totalWater += waterCol;
        }
    }
    return totalWater;
}
console.log("Should be 8:");
console.log(trap([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));
console.log("=================");
console.log("Should be 0:");
console.log(trap([1, 2, 3, 4]));
console.log("=================");
console.log("Should be 1:");
console.log(trap([1, 2, 1, 2]));
console.log("=================");
console.log("Should be 0:");
console.log(trap([3]));
console.log("=================");
console.log("Should be 6:");
console.log(trap([4, 0, 0, 3]));
console.log("=================");
console.log("Should be 0:");
console.log(trap([]));
console.log("=================");
console.log("Should be...");
console.log(trap([1213, 232, 54, 123, 832748, 222, 123114, 133, 4, 123, 1, 902]));
