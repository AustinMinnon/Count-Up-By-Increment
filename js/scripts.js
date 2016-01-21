var isZero = function(countTo, countBy){
  //countTo
  //we want to analyze countBy, and if zero or NaN, return 'not a multiple'
if ((countBy !== 0) || (countBy!==NaN) || (countTo !== 0) || (countTo!==NaN)) {
  return true;
}else {
  return false;
};
};

// var isZero = function(countTo, countBy){
//   //countBy
//   //we want to analyze countTo, and if zero or NaN, return 'not a multiple'
// if ((countTo !== 0) || (countTo!==NaN)) {
//   return true;
// }else{
//   return false;
// }
// };
