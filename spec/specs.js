describe('isZero', function(){
  it("will return message 'not a multiple' if second number is zero", function(){
    expect(isZero(25,0)).to.equal(false);
  });
});
