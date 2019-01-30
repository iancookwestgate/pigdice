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
    if (roll === 1) {
      total = 0;
      $("#dice-pigz").hide();
      $("#dice-pigz-hold").hide();
      $("#dice-pigz2").show();
      $("#dice-pigz-hold2").show();
    } else {
      scoreArr.push(roll);
    }
    function getTotal(total, num) {
      return total + num;
    }
    var total = scoreArr.reduce(getTotal);

    $("#pig-score").text(total);
  });
  $("#dice-pigz-hold").click(function(event) {
    $("#dice-pigz").hide();
    $("#dice-pigz-hold").hide();
    $("#dice-pigz2").show();
    $("#dice-pigz-hold2").show();
  });

  $("#dice-pigz2").click(function(event) {
    var roll = diceRoll();
    $("#pig-results2").append(roll + " ");
    if (roll === 1) {
      total = 0;
      $("#dice-pigz").show();
      $("#dice-pigz-hold").show();
      $("#dice-pigz2").hide();
      $("#dice-pigz-hold2").hide();
    } else {
      scoreArr2.push(roll);
    }
    function getTotal(total, num) {
      return total + num;
    }
    var total = scoreArr2.reduce(getTotal);

    $("#pig-score2").text(total);
  })
  $("#dice-pigz-hold2").click(function(event) {
    $("#dice-pigz").show();
    $("#dice-pigz-hold").show();
    $("#dice-pigz2").hide();
    $("#dice-pigz-hold2").hide();
  });

})
