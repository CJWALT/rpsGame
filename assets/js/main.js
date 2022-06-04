//Initialize variables
let computerScore = 0; 
let playerScore = 0;

let result;

//function computer play
function computerPlay(){

    var selectionWord = ['rock', 'paper', 'scissors']; // computer selection array.
    
return  randomWord = selectionWord[Math.floor(Math.random() * selectionWord.length)];  //computer the random selection for coputer play.
}

//function play round.
function playRound( playerSelection, computerSelection ){ 

    if( playerChoice === computerSelection ){
            return  "It is a tie!"
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

    let playerWord;
    
    //the for loop plays the game 5 times.
    for ( let i = 0; i < 5; i++){
    playerWord = window.prompt( "Enter your weapon of choice (Rock, Paper, Scissors): ")
    playerChoice = playerWord.toLowerCase();
        
    result = playRound( playerChoice, computerPlay() ); 
    
    document.writeln( "<ul><li> " + result + "</li></ul>")
  
    } 

    // check the highest score
    if ( playerScore > computerScore )
                    
                        document.writeln( "<p> Yay!! you won. The highest score is: " + playerScore + " Computer score is: " + computerScore + "</p>");
    else 
                    document.writeln( "<p> Oww! Computer won. The highest score is:  " + computerScore + " Player score is: " + playerScore + "</p>");
    
 
    if( playerScore == computerScore )
         document.writeln ("<p> Its a tie in the overall round </p>")
 }

game();

 
