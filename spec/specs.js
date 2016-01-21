describe('isZero', function(){
  it("will return message 'not a factor' if first number is zero or NaN ", function(){
    expect(isZero(0, 5)).to.equal(true);
  });
  it("will return message 'not a multiple' if second number is zero or NaN", function(){
    expect(isZero(25, 0)).to.equal(true);

  });
});
