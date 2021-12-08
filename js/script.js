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
  
  let computer = Math.ceil(Math.random()*3);
  if (computer === 1){
    $(".computerChoice").text("Rock");
  } else if (computer === 2){
    $(".computerChoice").text("Paper");
  } else if (computer === 3){
    $(".computerChoice").text("Scissors");
  } 
if (choice !== "rock") {
  $(".userChoice").text("Enter correct responed")
} 
});

///Or you can use this code to randomize words. 
 ///let Moves = (arr) => arr[Math.floor(Math.random()*arr.length)];
//let computerMove = Moves(['rock', 'paper', 'scissors'])   
  //$(".computerChoice").text(computerMove);