function hasTargetSum(array, target) {

  for (let i = 0; i < array.length; i++) {
    let currentNum = target - array[i]

    for (let j = i+1; j < array.length; j++) {
      let comparingNum = array[j]
      if(currentNum === comparingNum) return true; 
    }
  }
  return false
}







/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here

function hasTargetSum(array, target)
need to iterate through 'array'
  need two iterations to iterate through 'array'
    need to name interation index for both iterations
      add iteration indexs together
        if it is equal to 'target'
          return true
        else
          return false
*/

/*
  Add written explanation of your solution here

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
