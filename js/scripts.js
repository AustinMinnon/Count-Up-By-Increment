var isZero = function(countTo, countBy){
  //countTo
  //we want to analyze countBy, and if zero or NaN, return 'not a multiple'
if ((countBy !== 0) || (countBy!==NaN) || (countTo !== 0) || (countTo!==NaN)) {
  return true;
}else {
  return false;
};
};
var countUp = function(countTo, countBy){
// loop unti countTo number is reached
var indexStart = "";
for( var i=1; i<= countTo; i++){
  indexStart += i;
}
return indexStart;
};
