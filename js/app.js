
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