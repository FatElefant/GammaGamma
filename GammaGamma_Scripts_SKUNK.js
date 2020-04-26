// Scripts for SKUNK xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
document.addEventListener('DOMContentLoaded',function(){
  let skunkContent = document.createElement('div');
  document.getElementById('sitecontentcontainer').appendChild(skunkContent);
  skunkContent.id='skunkContent';

// This element is the two dice.
  var dice_element = document.createElement('h1');
  document.getElementById('skunkContent').appendChild(dice_element);
  dice_element.id='dice_element'
  dice_element.innerHTML = "Ready to start playing SKUNK?<br>";
  var play_game_button = document.createElement('button');
  play_game_button.id='play_game_button';
  document.getElementById('dice_element').appendChild(play_game_button);
  play_game_button.innerHTML='Play SKUNK!'
// Container for the buttons
  var button_container = document.createElement('div');
  document.getElementById('skunkContent').appendChild(button_container);
  button_container.id='button_container';
// Need to create a button for rolling the dice
  var roll_dice_button = document.createElement('button');
  document.getElementById('button_container').appendChild(roll_dice_button);
  roll_dice_button.id = 'roll_dice_button';
  roll_dice_button.innerHTML = 'Roll dice!';
  roll_dice_button.disabled=true;
// Need to create a button for ending the round
  var end_round_button = document.createElement('button');
  document.getElementById('button_container').appendChild(end_round_button);
  end_round_button.id = 'end_round_button';
  end_round_button.innerHTML = 'End this round.';
  end_round_button.disabled=true;
// Need to create a table for tracking all the scores
  var score_card = document.createElement('table');
  document.getElementById('skunkContent').appendChild(score_card);
      // Make the score card look good
      score_card.id = 'skunk_score_card';
      score_card.innerHTML = "<th id=\"th_r1\">S</th><th id=\"th_r2\">K</th><th id=\"th_r3\">U</th><th id=\"th_r4\">N</th><th id=\"th_r5\">K</th><tr><td><ul id=\"td_r1\"></ul></td><td><ul id=\"td_r2\"></ul></td><td><ul id=\"td_r3\"></ul></td><td><ul id=\"td_r4\"></ul></td><td><ul id=\"td_r5\"></ul></td></tr>";
  // Original dice pictures
  var cube_area = document.createElement('div');
  document.getElementById('skunkContent').appendChild(cube_area);
  cube_area.id='cube_area';

  var cube_area1 = document.createElement('div');
  document.getElementById('cube_area').appendChild(cube_area1);
  cube_area1.id='cube_area1';
  var cube1 = document.createElement('img');
  document.getElementById('cube_area1').appendChild(cube1);
  cube1.src='die_img_1.png';
  cube1.id='cube1';

  var cube_area2 = document.createElement('div');
  document.getElementById('cube_area').appendChild(cube_area2);
  cube_area2.id='cube_area2';
  var cube2 = document.createElement('img');
  document.getElementById('cube_area2').appendChild(cube2);
  cube2.src='die_img_1.png';
  cube2.id='cube2';


// Variables needed ------------------------------------------------
let die1 = 1;
let die2 = 1;
let dice_sum = die1 + die2;
let round_score = 0;
let round_number = 0; //keep track of how many rounds have been played
let score_printer = `#td_r${round_number}`
let show_round = `#th_r${round_number}`

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
  document.getElementById('cube1').src=`die_img_${die1}.png`;
  document.getElementById('cube2').src=`die_img_${die2}.png`;
}

// when they click the "Play Skunk" button, the grame should activate by enabling the two other buttons and showing which round it is.
document.querySelector('#play_game_button').onclick = ()=>{
  roll_dice_button.disabled=false;
  end_round_button.disabled=false;
  play_game_button.disabled=true;
  play_game_button.style.height='0px';
  play_game_button.style.opacity='0';
  play_game_button.innerHTML='';
  round_number += 1;
  show_round = `#th_r${round_number}`;
  score_printer = `#td_r${round_number}`;
  document.querySelector(show_round).style.backgroundColor = 'white';
  document.querySelector(show_round).style.color = 'black';
  document.querySelector(show_round).style.border = '3px solid black';
  dice_element.innerHTML = `Round ${round_number}`;
}

// when they click "Roll Again", we should re-roll the dice and add to the round score
  document.querySelector('#roll_dice_button').onclick = ()=>{
  // remove and re-add the dice so that the animation plays
  var element = document.getElementById("cube1");
  element.parentNode.removeChild(element);
  var element = document.getElementById("cube2");
  element.parentNode.removeChild(element);

  var cube1 = document.createElement('img');
  document.getElementById('cube_area1').appendChild(cube1);
  cube1.id='cube1';

  var cube2 = document.createElement('img');
  document.getElementById('cube_area2').appendChild(cube2);
  cube2.id='cube2';
  //update variables
  rolldice();
  // play animation
  cube1.style.animationPlayState='running';
  cube2.style.animationPlayState='running';
  // when double 1 is rolled, display "lose all points"
    if(die1 == 1 && die2 == 1){
      dice_element.innerHTML = `Round ${round_number}<br>Oh no! Double 1! You lose ALL of your points! What a shame! This round is over, better luck next round.`;
      const record = document.createElement('li');
      record.innerHTML = `Lose ALL points!`;
      document.querySelector(score_printer).appendChild(record);
      if(round_number>4){
        document.getElementById('dice_element').innerHTML="GAME OVER!";
        document.getElementById('roll_dice_button').disabled=true;
        document.getElementById('end_round_button').disabled=true;}
      else{
      round_number += 1;
      show_round = `#th_r${round_number}`;
      document.querySelector(show_round).style.backgroundColor = 'white';
      document.querySelector(show_round).style.color = 'black';
      document.querySelector(show_round).style.border = '3px solid black';
      round_score = 0;
      score_printer = `#td_r${round_number}`;}
    }
  // when a 1 is rolled, display "lose points from this round"
    else if (die1==1 || die2==1){
      dice_element.innerHTML = `Round ${round_number}<br>You rolled a 1! You score nothing this round. Better luck next round.`;
      const record = document.createElement('li');
      record.innerHTML = `Rolled a 1, score 0 this round!`;
      document.querySelector(score_printer).appendChild(record);
      if(round_number>4){document.getElementById('dice_element').innerHTML="GAME OVER!";
      document.getElementById('roll_dice_button').disabled=true;
      document.getElementById('end_round_button').disabled=true;}
      else{
      round_number += 1;
      show_round = `#th_r${round_number}`;
      document.querySelector(show_round).style.backgroundColor = 'white';
      document.querySelector(show_round).style.color = 'black';
      document.querySelector(show_round).style.border = '3px solid black';
      round_score = 0;
      score_printer = `#td_r${round_number}`;}
    }
  // normal rolls
    else{
  round_score += dice_sum;
  //update display
  dice_element.innerHTML = `Round ${round_number}<br>Rolling ${die1} and ${die2} scores ${dice_sum}.<br>Points this round: ${round_score}`;
  const record = document.createElement('li');
  record.innerHTML = `Rolled ${dice_sum} - Total ${round_score}`;
  document.querySelector(score_printer).appendChild(record);
}}

// End round button code
  document.querySelector('#end_round_button').onclick = ()=>{
    if(round_number>4){document.getElementById('dice_element').innerHTML="GAME OVER!";
    document.getElementById('roll_dice_button').disabled=true;
    document.getElementById('end_round_button').disabled=true;}
    else{
    round_number += 1;
    show_round = `#th_r${round_number}`;
    document.querySelector(show_round).style.backgroundColor = 'white';
    document.querySelector(show_round).style.color = 'black';
    document.querySelector(show_round).style.border = '3px solid black';
    round_score = 0;
    score_printer = `#td_r${round_number}`;}
}
// -------------- These close the initial DOM Content Loaded listener for SKUNK!
})
