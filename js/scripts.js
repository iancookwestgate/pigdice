function diceRoll () {
  var random = Math.floor(Math.random() * 6)
  return random+1;
}

var scoreArr = [];
var scoreArr2 = [];
var player1Score;
var player2Score;

$(document).ready(function() {
  $("#dice-pigz").click(function(event) {
    var roll = diceRoll();
    $("#pig-results").append(roll + " ");
    scoreArr.push(roll);

    function getTotal(total, num) {
      return total + num;
    }
    var total = scoreArr.reduce(getTotal);

    if (roll === 1) {
      total = 0;
      $("#dice.pigz").hide("slow", function() {

      });
      $("#dice.pigz2").show("slow", function() {
        
      });
    }

    $("#pig-score").text(total);
  })

  $("#dice-pigz2").click(function(event) {
    var roll = diceRoll();
    $("#pig-results2").append(roll + " ");
    scoreArr2.push(roll);

    function getTotal(total, num) {
      return total + num;
    }
    var total = scoreArr2.reduce(getTotal);

    if (roll === 1) {
      total = 0;
      $("#dice.pigz").show();
      $("#dice.pigz2").hide();
    }

    $("#pig-score2").text(total);
  })
})
