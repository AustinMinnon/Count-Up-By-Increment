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
var results = [];
  for( var i=0; i<= countTo; i+=countBy){
    results.push(i);
  }
  var resultsSliced = results.slice(1,results.length)
  return resultsSliced;
};
