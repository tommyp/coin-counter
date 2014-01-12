test( "create a Calc object with an amount of 123p", function() {
  c = new Calc(123)
  equal(c.amount, 123, "Passed!")
});