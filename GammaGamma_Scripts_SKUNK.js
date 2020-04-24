// Scripts for SKUNK xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Create page elements --------------------------------------------
document.addEventListener('DOMContentLoaded',function(){
// This element displays the round number at the top of the page
  var round_number_element = document.createElement('h1');
  document.body.appendChild(round_number_element);
  round_number_element.innerHTML = 'Round 1';
// This element is the two dice.
  var dice_element = document.createElement('h1');
  document.body.appendChild(dice_element);
  dice_element.innerText = "Ready to start playing SKUNK?";
// Need to create a button for rolling the dice
  var roll_dice_button = document.createElement('button');
  document.body.appendChild(roll_dice_button);
  roll_dice_button.id = 'roll_dice_button';
  roll_dice_button.innerHTML = 'Roll dice!'
// Need to create a button for ending the round
  var end_round_button = document.createElement('button');
  document.body.appendChild(end_round_button);
  end_round_button.id = 'end_round_button';
  end_round_button.innerHTML = 'End this round.'
// Need to create a table for tracking all the scores
  var score_card = document.createElement('table');
  document.body.appendChild(score_card);
      // Make the score card look good
      score_card.id = 'skunk_score_card'
      score_card.innerHTML = "<th>S</th><th>K</th><th>U</th><th>N</th><th>K</th><tr><td><ul id=\"td_r1\">TEST</ul></td><td><ul id=\"td_r2\">TEST2</ul></td><td><ul id=\"td_r3\">TEST3</ul></td><td><ul id=\"td_r4\">TEST4</ul></td><td><ul id=\"td_r5\">TEST5</ul></td></tr>"




// Variables needed ------------------------------------------------
let die1 = 1;
let die2 = 1;
let dice_sum = die1 + die2;
let round_score = 0;
let round_number = 1; //keep track of how many rounds have been played
let score_printer = `#td_r${round_number}`

// Functions -------------------------------------------------------

// rolldie1 and rolldie2 assign random integers between 1 and 6 to the die1 and die2 variables
function rolldie1 () {
  die1 = Math.floor(Math.random()*6+1);
  dice_sum = die1 + die2;
}

function rolldie2 () {
  die2 = Math.floor(Math.random()*6+1);
  dice_sum = die1 + die2;
}

// rolldice rolls the two dice by calling the rolldie1 and rolldie2 functions
function rolldice () {
  rolldie1();
  rolldie2();
  dice_sum = die1 + die2;
}

// when they click "Roll Again", we should re-roll the dice and add to the round score
  document.querySelector('#roll_dice_button').onclick = ()=>{
  //update variables
  rolldice();
  // when double 1 is rolled, display "lose all points"
    if(die1 == 1 && die2 == 1){
      dice_element.innerHTML = "Oh no! Double 1! You lose ALL of your points! What a shame! This round is over, better luck next round.";
      const record = document.createElement('li');
      record.innerHTML = `Lose ALL points!`;
      document.querySelector(score_printer).appendChild(record);
      if(round_number>4){alert("GAME OVER! --->  Please refresh the page to restart.")}
      else{
      round_number += 1;
      round_score = 0;
      score_printer = `#td_r${round_number}`;
      round_number_element.innerHTML = `Round ${round_number}`}
    }
  // when a 1 is rolled, display "lose points from this round"
    else if (die1==1 || die2==1){
      dice_element.innerHTML = "You rolled a 1! You score nothing this round. Better luck next round.";
      const record = document.createElement('li');
      record.innerHTML = `Rolled a 1, score 0 this round!`;
      document.querySelector(score_printer).appendChild(record);
      if(round_number>4){alert("GAME OVER! --->  Please refresh the page to restart.")}
      else{
      round_number += 1;
      round_score = 0;
      score_printer = `#td_r${round_number}`;
      round_number_element.innerHTML = `Round ${round_number}`}
    }
  // normal rolls
    else{
  round_score += dice_sum;
  //update display
  dice_element.innerText = `You rolled a ${die1} and a ${die2} scoring ${dice_sum}. The score for this round so far is ${round_score}.`;
  const record = document.createElement('li');
  record.innerHTML = `Scored ${dice_sum}, total is ${round_score}.`;
  document.querySelector(score_printer).appendChild(record);
}}

// End round button code
  document.querySelector('#end_round_button').onclick = ()=>{
    if(round_number>4){alert("GAME OVER! --->  Please refresh the page to restart.")}
    else{
    round_number += 1;
    round_score = 0;
    score_printer = `#td_r${round_number}`;
    round_number_element.innerHTML = `Round ${round_number}`}
}
// -------------- These close the initial DOM Content Loaded listener for SKUNK!
})
