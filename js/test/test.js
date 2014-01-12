c = new Calc(123)

test( "create a Calc object with an amount of 123p", function() {
  equal(c.amount, 123, "Passed")
});

test( "calculate the amount of coins needed correctly", function() {
  c.calculate()
  equal(c.coins[0]['count'], 0, "Has 0 £2 coins")
  equal(c.coins[1]['count'], 1, "Has 1 £1 coin")
  equal(c.coins[2]['count'], 0, "Has 0 50p coins")
  equal(c.coins[3]['count'], 1, "Has 1 20p coin")
  equal(c.coins[4]['count'], 0, "Has 0 10p coins")
  equal(c.coins[5]['count'], 0, "Has 0 5p coins")
  equal(c.coins[6]['count'], 1, "Has 1 2p coin")
  equal(c.coins[7]['count'], 1, "Has 1 1p coin")
});

view = new CounterView();

test( "create a new CounterView object", function() {
  equal(view.pennies, 0, "Passed")
});

test( "CounterView can get an input value", function() {
  $('#amount').val('£1.34');
  equal(view.input.val(), '£1.34', "Gets value");
  view.sanitizeInput();
  equal(view.pennies, 134, "Gets pennies as an integer from input string");
});