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
    $(".result").text("You Win!")
  } else if (choice === 'rock' && computerMove === 'paper'){
    $(".result").text("Computer Win!")
  } else if (choice === 'rock' && computerMove === 'rock'){
    $(".result").text("It's a Tie")
  }
  
  if (choice === 'paper' && computerMove === 'rock') {
        $(".result").text("You Win!")
  } else if (choice === 'paper' && computerMove === 'scissors'){
            $(".result").text("Computer Win!")
  } else if (choice === 'paper' && computerMove === 'paper'){
            $(".result").text("It's a Tie")
  }
  
  if (choice === 'scissors' && computerMove === 'paper') {
        $(".result").text("You Win!")
  } else if (choice === 'scissors' && computerMove === 'rock'){
            $(".result").text("Computer Win!")
  } else if (choice === 'scissors' && computerMove === 'scissors'){
            $(".result").text("It's a Tie")
  }
});

function (img) {
    $(".result").html(`<img src='${img}'>`);
}
///Or you can use this code to randomize words. 
 ///let Moves = (arr) => arr[Math.floor(Math.random()*arr.length)];
//let computerMove = Moves(['rock', 'paper', 'scissors'])   
  //$(".computerChoice").text(computerMove);