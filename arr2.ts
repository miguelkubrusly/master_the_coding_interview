export {};

function solution(nums: number[]): number {
  let maxArea = 0;

  if (nums.length < 2) {
    return maxArea;
  }

  // BRUTE FORCE
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
  /*   for (let p1 = 0; p1 < nums.length - 1; p1++) {
    const wall1 = nums[p1];
    for (let p2 = p1 + 1; p2 < nums.length; p2++) {
      const wall2 = nums[p2];
      const heigh = Math.min(wall1, wall2);
      const width = p2 - p1;
      const area = heigh * width;
      maxArea = Math.max(maxArea, area);
    }
  } */
  // ====================================================== //
  // ====================================================== //
  // ====================================================== //

  // OPTIMAL
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

  return maxArea;
}

const a = solution([1, 6, 9, 1]);
console.log("====================================");
console.log("Should be: 6");
console.log(a);

const b = solution([3, 3, 9, 9, 1, 0, 4]);
console.log("====================================");
console.log("Should be: 18");
console.log(b);

const c = solution([1]);
console.log("====================================");
console.log("Should be: 0");
console.log(c);

const d = solution([]);
console.log("====================================");
console.log("Should be: 0");
console.log(d);

const e = solution([1000, 0, 1, 10, 2]);
console.log("====================================");
console.log("Should be: 30");
console.log(e);

const f = solution([
  12, 30, 51, 72, 83, 34, 65, 76, 87, 21, 48, 59, 42, 64, 10, 22, 31, 73, 70,
]);
console.log("====================================");
console.log("Unknown solution:");
console.log(f);
