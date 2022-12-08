let rolledDice = [0, 0, 0, 0, 0]; 
let timesRolled = 0;
let gameScore = 0;

/*****************************************
  ROLL
  The ROLL function is called when the "roll"
  button is pressed. It should do the following:
   - Update any NON-SELECTED dice
   - Only allow <=3 rolls per turn
******************************************/
function roll() {
  if (timesRolled < 3) {
    updateDice();
    timesRolled++; 
    
  }
}

let timesRolled = 0

/*****************************************
  ROLL DICE
  This function will actually roll the dice 
  by generating 5 random numbers each between 1-6
******************************************/
function rollDice() {
  let output = [];
  for (i = 0; i < 5; i++) {
    output.push(Math.floor(Math.random() * (6)) + 1);
  }
  return output;
}

/*****************************************
  UPDATE DICE
  This function should:
   - update the image to the corrisponding dice value
   for any NON-SELECTED die
******************************************/
function updateDice() {
  rolledDice = rollDice();
  for (let i = 0; i < rolledDice.length; i++) {
    let source = document.getElementById("die" + i + "Image").src;
    if (source.includes("dieWhite")) {
      document.getElementById("die" + i + "Image").src = "/yahtzee/img/dice/dieWhite_border" + rolledDice[i] + ".png";
    }
  }
}

/***************************************** 
  TOGGLE HOLD
   The toggle hold function should do the following when called:
    - Turn the die clicked to RED (selected) if it is currently WHITE (not selected)
    - Turn the die clicked to WHITE (not selected) if it is currently RED (selected) 
*****************************************/
function toggleHold(diceSelect) {
  let source = document.getElementById("die" + diceSelect + "Image").src;
  if (source.includes("dieWhite")) {
    document.getElementById("die" + diceSelect + "Image").src = document.getElementById("die" + diceSelect + "Image").src.replace("dieWhite", "dieRed");
  } else {
    document.getElementById("die" + diceSelect + "Image").src = document.getElementById("die" + diceSelect + "Image").src.replace("dieRed", "dieWhite");
  }
}

/***************************************** 
  ASSIGN
*****************************************/
function assign(selectedNumber) {
  let countOfValidDice = 0;
  let scoreForThisRound = 0;


  for (let heldDieSrc of getHeldDice()) {
    if (selectedNumber === getDieValue(heldDieSrc)) {
      countOfValidDice++;
    }
  }

  scoreForThisRound = selectedNumber * countOfValidDice;
  document.getElementById(selectedNumber + "Count").innerHTML = countOfValidDice;
  document.getElementById(selectedNumber + "Score").innerHTML = scoreForThisRound;
  gameScore += scoreForThisRound;
  document.getElementById("totalScore").innerHTML = gameScore;


  /*------------------------------------------------------------------------------------
  CLASS 8 HOMEWORK
    Add functionality to reset the game after the numbers have been assigned so that the user can roll another round.
      
      1. Reset the dice to be blank and white
        ***HINT*** -- Look at the for loop in the getHeldDice function for how I selected all the die images, can you use something similar to reset all the die?
        The src value of a reset die would be "/yahtzee/img/dice/dieWhite_border0.png"
  
      2.  Reset the timesRolled variable to 0;
  ------------------------------------------------------------------------------------*/

}

/******************************************
GET HELD DICE
******************************************/
function getHeldDice() {
  let heldDice = [];
  for (let die of document.querySelectorAll(".die > img")) {
    if (die.src.includes("Red")) {
      heldDice.push(die.src);
    }
  }
  return heldDice;
}


/******************************************
GET DIE VALUE
******************************************/
function getDieValue(imageSource) {
  return Number(imageSource.split("/img/")[1].replace(/[^0-9]/ig, ""));
}

document.getElementById("die0Image").src="/yahtzee/img/dice/dieWhite_border0.png
document.getElementById("die0Image").src="/yahtzee/img/dice/dieWhite_border0.png
document.getElementById("die0Image").src="/yahtzee/img/dice/dieWhite_border0.png
document.getElementById("die0Image").src="/yahtzee/img/dice/dieWhite_border0.png
document.getElementById("die0Image").src="/yahtzee/img/dice/dieWhite_border0.png
document.getElementById("die0Image").src="/yahtzee/img/dice/dieWhite_border0.png







