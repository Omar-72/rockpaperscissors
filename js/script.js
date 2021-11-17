$(".play").click(function(){
  let choice= $(".input").val();
  console.log(choice)
  $(".userChoice").text(choice);
});

const random = Math.floor(Math.random() * 20);
$(".result").text(random)