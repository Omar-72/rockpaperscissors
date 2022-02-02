$(".play").click(function(){
  let choice = $(".input").val().toLowerCase();
if (choice === 'rock') { 
  $(".userChoice").text("Rock")
} else if (choice === 'paper') {
    $(".userChoice").text("Paper")
}else if (choice === 'scissors') {
    $(".userChoice").text("Scissors")
} else if (choice !== 'rock' || choice !== 'paper' || choice !== 'scissors'){
      $(".userChoice").text("Please try again")
}
  
  let computer = Math.ceil(Math.random()*3);
  let computerMove;
  if (computer === 1){
    $(".computerChoice").text("Rock");
    computerMove = "rock";
  } else if (computer === 2){
    $(".computerChoice").text("Paper");
    computerMove = "paper";
  } else if (computer === 3){
    $(".computerChoice").text("Scissors");
    computerMove = "scissors";
  }
  
  if (choice === 'rock' && computerMove === 'scissors') {
        ShowResult(text2)
  } else if (choice === 'rock' && computerMove === 'paper'){
        ShowResult(text1)
  } else if (choice === 'rock' && computerMove === 'rock'){
        ShowResult(text3)
  }
  
  if (choice === 'paper' && computerMove === 'rock') {
        ShowResult(text2)
  } else if (choice === 'paper' && computerMove === 'scissors'){
            ShowResult(text1)
  } else if (choice === 'paper' && computerMove === 'paper'){
            ShowResult(text3)
  }
  
  if (choice === 'scissors' && computerMove === 'paper') {
        ShowResult(text2)
  } else if (choice === 'scissors' && computerMove === 'rock'){
            ShowResult(text1)
  } else if (choice === 'scissors' && computerMove === 'scissors'){
            ShowResult(text3)
  }
  
});

let text1="Computer Wins!"
let text2="You Win!"
let text3="It's a Tie"
function ShowResult(text) {
    $(".result").text(text);
}

///Or you can use this code to randomize words. 
 ///let Moves = (arr) => arr[Math.floor(Math.random()*arr.length)];
//let computerMove = Moves(['rock', 'paper', 'scissors'])   
  //$(".computerChoice").text(computerMove);