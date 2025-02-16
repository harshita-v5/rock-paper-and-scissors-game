let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg");
const userScoreUpdate=document.querySelector("#user-score");
const compScoreUpdate=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScoreUpdate.innerText=userScore;
       msg.innerText ="You win!!";
    
    }else{
        compScore++;
        compScoreUpdate.innerText=compScore;
        msg.innerText ="You lose :(";
    }
};

const drawGame=()=>{
    msg.innerText="Game Draw--";
}
const playGame=(userChoice)=>{
    //generate comp choice
    const compChoice=genCompChoice();

    if(userChoice===compChoice){
      drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissors,paper
            userWin=compChoice==="paper"? false:true;
        }else if(userChoice==="paper"){
            //rock,scissors
            userWin=compChoice==="scissors"? false:true;
        }else{
            //rock,paper
            userWin=compChoice==="rock"? false:true;
        }
        showWinner(userWin);
    }
};


choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
   playGame(userChoice);
  });
});