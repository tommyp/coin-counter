
// Our Calc object holds everything we need about our calculation

var Calc = function(amount) {
  this.amount = amount;
  this.coins = [
    {
      coin : 200, 
      count : 0
    },
    {
      coin : 100, 
      count : 0
    },
    {
      coin : 50, 
      count : 0
    },
    {
      coin : 20, 
      count : 0
    },
    {
      coin : 10, 
      count : 0
    },
    {
      coin : 5, 
      count : 0
    },
    {
      coin : 2, 
      count : 0
    },
    {
      coin : 1, 
      count : 0
    }
  ];
}

// The calculate function will take the count of each coin we need and update the coins array

Calc.prototype.calculate = function() {
  // Set the remaining amount
  var remaining_amount = this.amount;
  // Save the context of this, because in the _.each this becomes the window
  var self = this;
  // Loop over each of the coin denominations
  _.each(this.coins, function(element, index, list) {
    // Get the size of the coin
    var coin = element['coin'];

    // Find the remainder after dividing the remaining_amount by the coin
    // The first time this loop runs, remaining_amount will be the amount we set originally
    // Each time after, it will be the remainder
    var remainder = remaining_amount % coin;

    // Get the amount divisible by the current coin
    var divisible_by_coin = remaining_amount - remainder;

    // Change the remaining_amount variable to be whatever is left over
    remaining_amount = remainder;

    // Set the count of the current coin to the result of dividing the remaining_amount without the remainder, by the coin denomination
    self.coins[index]['count'] = divisible_by_coin/coin;
  })
}