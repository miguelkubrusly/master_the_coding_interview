function twoSum(nums: number[], target: number): [number, number] | null {
  // BRUTE FORCE SOLUTION
  // O(n**2) - O(1)
  // ------------------------ //

  // for (let i = 0; i < nums.length-1; i++) {
  //   const complement = target - nums[i]
  //   for (let p2 = i+1; p2 < nums.length; p2++) {
  //     if (nums[p2] == complement){
  //       return [i,p2]
  //     }
  //   }
  // }
  // return null

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

  // OPTIMAL SOLUTION
  // O(n) - O(n)
  // ------------------------ //

  const numToIndex = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numToIndex.has(complement)) {
      return [numToIndex.get(complement)!, i];
    }
    numToIndex.set(nums[i], i);
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
