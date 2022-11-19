function roll() {
  updateDice();
}

function rollDice(){
  let output = [];
  for (i = 0; i < 5; i++) {
    output.push(Math.floor(Math.random() * (6)) + 1);
  }
  return output;
}


function updateDice() {
  let rolledDice = rollDice();

  for(let i = 0; i < rolledDice.length; i++) {
    document.getElementById("die"+i+"Image").src="/yahtzee/img/dice/dieWhite_border"+rolledDice[i]+".png"; 
  }
    
} 
function toggleHold (diceSelect){
   document.getElementById("die"+diceSelect+"Image").src = document.getElementById("die"+diceSelect+"Image").src.replace("dieWhite", "dieRed");
}

var aceCounter; 

var twoCounter;

var threeCounter;

var fourCounter;

var fiveCounter;

var six counter;




