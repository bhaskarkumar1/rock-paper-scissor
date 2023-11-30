console.log("Hellofgsf");

var userScore = parseInt(localStorage.getItem("userScore")) ||0;
var computerScore = parseInt(localStorage.getItem("computerScore"))||0;
// user = "scissor";
var userDisplay=document.getElementById("user")
var com=document.getElementById("com")

function updateValue(){
  userDisplay.innerHTML=userScore;
  com.innerHTML=computerScore 


  // Store scores in local storage
  localStorage.setItem("userScore", userScore.toString());
  localStorage.setItem("computerScore", computerScore.toString());

}
//when page loades
updateValue();

function game(user) {
 

//   generate random selection for computer
    const random=Math.random() //it will generate [0,1)
    const luckyno=Math.floor(random*3)
    ls=["stone", "paper","scissor"]
    console.log(ls[luckyno])
    computer = ls[luckyno];

  if (user == "stone") {
    if (computer == "scissor") {
      userScore += 1;
    } else if (computer == "paper") {
      computerScore += 1;
    } else {
      console.log("Draw");
    }
  } else if (user == "paper") {
    if (computer == "stone") {
      userScore += 1;
    } else if (computer == "scissor") {
      computerScore += 1;
    } else {
      console.log("Draw");
    }
  }
  // user == scissor
  else {
    if (user == "scissor") {
      if (computer == "paper") {
        userScore += 1;
      } else if (computer == "stone") {
        computerScore += 1;
      } else {
        console.log("Draw");
      }
    }
  }

  // userDisplay.innerHTML=userScore
  // com.innerHTML=computerScore
  updateValue();

  console.log(`"userscore:  ${userScore} and computer: ${computerScore}"`);

}



// popup script

const popup=document.getElementById("popup")

function popupFunction(){
  popup.style.display="block";
}

function closepopup(){
  popup.style.display="None";
}