function Player(score) {
  this.score = score
}
Player.prototype.calculate = function(scoreArr) {
  function getTotal(total, num) {
    return total + num;
  }
  var total = scoreArr.reduce(getTotal);
  this.score = total + this.score;
}

function diceRoll () {
  var random = Math.floor(Math.random() * 6)
  return random+1;
}



$(document).ready(function() {
  var player1 = new Player(0);
  var player2 = new Player(0);
  var scoreArr = [];
  $("#dice-pigz").click(function(event) {
    var roll = diceRoll();

    $("#pig-results").append(roll + " ");
    if (roll === 1) {
      total = 0;
      $("#dice-pigz").hide();
      $("#dice-pigz-hold").hide();
      $("#dice-pigz2").show();
      $("#dice-pigz-hold2").show();
      scoreArr=[];
    } else {
      scoreArr.push(roll);
    }

  });
  $("#dice-pigz-hold").click(function(event) {
    player1.calculate(scoreArr)
    $("#pig-score").text(player1.score);
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
      scoreArr=[];
    } else {
      scoreArr.push(roll);
    }

  })
  $("#dice-pigz-hold2").click(function(event) {
    player2.calculate(scoreArr);
    $("#pig-score2").text(player2.score);
    $("#dice-pigz").show();
    $("#dice-pigz-hold").show();
    $("#dice-pigz2").hide();
    $("#dice-pigz-hold2").hide();
  });

})
