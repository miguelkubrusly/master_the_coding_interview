"use strict";
function trap(height) {
    let res = 0;
    let maxAfter = Math.max(...height);
    let maxBefore = 0;
    for (let i = 0; i < height.length - 1; i++) {
        const h = height[i];
        if (h === maxAfter) {
            maxAfter = Math.max(...height.slice(i + 1));
        }
        if (maxBefore > h && maxAfter > h) {
            const waterCol = Math.min(maxBefore, maxAfter) - h;
            res += waterCol;
        }
        maxBefore = Math.max(maxBefore, h);
    }
    return res;
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
console.log("Should be... 129469!");
console.log(trap([1213, 232, 54, 123, 832748, 222, 123114, 133, 4, 123, 1, 902]));
