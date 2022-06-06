//Initialize variables
let computerScore = 0; 
let playerScore = 0;

let result;

//function computer play
function computerPlay(){

    let selectionWord = ['rock', 'paper', 'scissors']; // computer selection array.
    return  randomWord = selectionWord[Math.floor(Math.random() * selectionWord.length)];  //computer the random selection for coputer play.
}

//function play round.
function playRound( playerSelection, computerSelection ){ 

        if( playerChoice === computerSelection ){
                return  "It is a tie!"
                }
                else if( playerChoice !== "rock" && playerChoice !=="paper" && playerChoice !== "scissors"){
                    return "wrong Input"               
                }
                    else if ( playerChoice === "rock" ){
                    if ( computerSelection === "paper") {
                           computerScore++; //keep count of computer score
                        return ( " Computer Won ") ;
                        } else {
                            playerScore++; //keep count of player score
                            return ( " Player Won ");
                        }
                    }
                
                else if ( playerChoice === "scissors"){
                    if ( computerSelection === "rock"){
                        computerScore++;
                        return ( " Computer Won " );
                    } else { 
                        playerScore++;
                    return ( " Player Won " );
                        
                    }
                }
                else if ( playerChoice === "paper"){
                    if ( computerSelection === "scissors" ){
                    computerScore++;
                return ( "Computer Won ");
                   
                } else{ 
                     playerScore++;
                return ( " Player Won" );
                }
                }
}

            //function game.
 function game(){

        alert ("Let's play Rock, Paper and Scissors");

        let playerWord;
        
    //the for loop plays the game 5 times.
    for ( let i = 0; i < 5; i++){
        playerWord = prompt( "Enter your weapon of choice (Rock, Paper, Scissors): " )
            if ( playerWord === null ){ 
                    alert("you quit the game")
                    break;
                } else {
                    playerChoice = playerWord.toLowerCase();
                }        
                
            if ( playerChoice !=="rock" && playerChoice !== "paper" && playerChoice !=="scissors"){
                    i -=1;
                    alert ("Wrong Input! Enter one of rock or paper or scissors");
                    
                    }
                   
        result = playRound( playerChoice, computerPlay() ); 
        console.log( result );   

        
        } 
         
        // check the highest score
        if ( playerScore > computerScore ){
                    console.log( "Yay!! you won. The highest score is: " + playerScore + " Computer score is: " + computerScore );
                }  
                else if (playerScore < computerScore) {
                    console.log( "Oww! Computer won. The highest score is:  " + computerScore + " Player score is: " + playerScore );
                } 
                    else if( playerScore != 0 && playerScore == computerScore ){
                    console.log ("Its a tie in the overall round")
                        } 
                    else {
                        console.log( "You quit the game");
                    }
 }

game();

 
