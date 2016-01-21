describe('isZero', function(){
  it("will return message 'not a factor' if first number is zero or NaN ", function(){
    expect(isZero(0, 5)).to.equal(true);
  });
  it("will return message 'not a multiple' if second number is zero or NaN", function(){
    expect(isZero(25, 0)).to.equal(true);
  });
});
describe('countUp', function(){
  it("count to first input",function(){
    expect(countUp(5,1)).to.eql([1,2,3,4,5]);
});
  it("count by second input, up to first input",function(){
    expect(countUp(15,5)).to.eql([5,10,15]);
  });
});
