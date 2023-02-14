
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newArr= [];
  if (matrix === undefined) {
    return newArr;
  }
 
 for (let i=0; i<matrix.length; i++) {
  if (i%2===0) {
    matrix[i].sort(function(a, b){return a-b});
  } else {
    matrix[i].sort(function(a, b){return b-a});
  }
  
  for (let j=0; j<matrix[i].length; j++) {
    newArr.push(matrix[i][j])
  }
 }
  console.log (newArr);
  return newArr;
}