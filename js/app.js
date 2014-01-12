
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
};

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
};

// Coin Counter View

var CounterView = function() {
  // Change context of this and set attributes
  var self = this;
  self.form = $('form');
  self.input = $('input#amount');
  self.calc = new Calc;
  self.pennies = 0;

  // On submission of form...
  self.form.submit(function(ev){
      // prevent it from doing anything
      ev.preventDefault();
      // Hide the error message
      $('.error').hide();
      // Run the sanitize input function
      self.sanitizeInput();
  });
};

CounterView.prototype.sanitizeInput = function() {
  // Take the input value as a string and make sure it is formatted as a UK currency
  if (this.input.val().match(/^£\d*\.?\d\d|\d\dp/g)) {
    // Remove all non-numeric characters
    var pennies = parseInt(this.input.val().replace(/\D/g,''))

    // Check to make sure it is an integer
    if (pennies % 1 == 0) {

      // Set the pennies value to what is in our input
      this.pennies = pennies;
    };
  } else {
    
    // If it doesn't format as a UK currency, show the error
    $('.error').text("That doesn't look like a valid amount!").show();
  };
};

$(document).ready(function() {
  var view = new CounterView();
});