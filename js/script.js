$(".play").click(function(){
  let choice = $(".input").val();
  $(".userChoice").text(choice);
  let playerMove;
  if (choice === 'rock') {
    playerMove = 1;
  } else if (choice === 'paper') {
    playerMove = 2;
  } else if (choice === 'scissors') {
    playerMove = 3;
  }
  
  let Moves = (arr) => arr[Math.floor(Math.random()*arr.length)];

let computerMove = Moves(['rock', 'paper', 'scissors'])   
  $(".computerChoice").text(computerMove);
});