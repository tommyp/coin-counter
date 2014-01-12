c = new Calc(123)

test("create a Calc object with an amount of 123p", function() {
  equal(c.amount, 123, "Passed")
});

test("calculate the amount of coins needed correctly", function() {
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

test("create a new CounterView object", function() {
  equal(view.pennies, 0, "Passed")
});

test("CounterView can get an input value", function() {
  $('#amount').val('£1.34');
  view.form.submit();
  equal(view.input.val(), '£1.34', "Gets value");
  equal(view.pennies, 134, "Gets pennies as an integer from input string");
});

test("CounterView renders result", function() {
  $('#amount').val('£1.34');
  view.form.submit();
  ok($(".result:contains('1 x £1')"), "Result has 1 x £1");
  ok($(".result:contains('1 x 20p')"), "Result has 1 x 20p");
  ok($(".result:contains('1 x 10p')"), "Result has 1 x 10p");
  ok($(".result:contains('2 x 2p')"), "Result has 2 x 2p");
});