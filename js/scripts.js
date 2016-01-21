var isZero = function(countTo, countBy){
  //countTo
  //we want to analyze countBy, and if zero or NaN, return 'not a multiple'
  if ((countBy !== 0) && (isNaN(countBy) === false) && (countTo !== 0) && (isNaN(countTo) === false)) {
    return true;
  }else {
    return false;
  };
};

var countUp = function(countTo, countBy){
// loop unti countTo number is reached
var results = [];
  for(var i = countBy; i <= countTo; i += countBy){
    results.push(i);
  }


  return results;
};


$(document).ready(function(){
  $(".userInput").submit(function(event){
    var input1 = parseInt($("input#countTo").val());
    var input2 = parseInt($("input#countBy").val());
    var filterNan = isZero(input1,input2);
    var result = countUp(input1,input2);
    if (filterNan === true) {
      $(".result").text(result);
    } else {
      alert('please enter real numbers greater than zero');
      return
    }
    event.preventDefault();
  })
})
