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

function aiPlayer(computer) {
  var aiArr = [];
    for (var i = 0; i <= 1; i++) {
      var roll = diceRoll();
      if (roll === 1) {
        aiArr.push(0);
        break;
      } else {
        aiArr.push(roll);
      }
    }
  computer.calculate(aiArr);
  console.log(aiArr);
  console.log(computer.score);
  return (computer.score);
}

function diceRoll () {
  var random = Math.floor(Math.random() * 6)
  return random+1;
}

$(document).ready(function() {
  var player1 = new Player(0);
  var player2 = new Player(0);
  var scoreArr = [];
<<<<<<< HEAD
  
  $("#dice-pigz").click(function(event) {
=======
  var computer = new Player(0);
  // SELECT ONE PLAYER
  $("#activate1P").click(function(event) {
    $("#onePlayer").show();
    $("#startScreen").hide();
  })

  // SELECT TWO PLAYERS
  $("#activate2P").click(function(event) {
    $("#twoPlayer").show();
    $("#startScreen").hide();
  })

  // ONE PLAYER UI LOGIC
  $("#one-pigz").click(function(event) {
>>>>>>> refactor
    var roll = diceRoll();
    $("#one-results").append(roll + " ");
    if (roll === 1) {
      total = 0;
      scoreArr=[];
      var computerScore = aiPlayer(computer);
      $("#ai-results").text(computerScore);
    } else {
      scoreArr.push(roll);
    }
  });
  $("#one-pigz-hold").click(function(event) {
    player1.calculate(scoreArr)
    $("#one-score").text(player1.score);
    var computerScore = aiPlayer(computer);
    $("#ai-results").text(computerScore);
  });

  // TWO PLAYER UI LOGIC
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
    aiPlayer(computer);
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
<<<<<<< HEAD
  })
=======
  });
>>>>>>> refactor
  $("#dice-pigz-hold2").click(function(event) {
    player2.calculate(scoreArr);
    $("#pig-score2").text(player2.score);
    $("#dice-pigz").show();
    $("#dice-pigz-hold").show();
    $("#dice-pigz2").hide();
    $("#dice-pigz-hold2").hide();
  });
})
