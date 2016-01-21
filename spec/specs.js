describe('isZero', function(){
  it("will return message 'not a multiple' if either number is zero", function(){
    expect(isZero(5, 0)).to.equal(false);
  });
});
