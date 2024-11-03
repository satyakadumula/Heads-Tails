const score = JSON.parse(localStorage.getItem('Score'))||{
    wins : 0,
    loses : 0
}
const theMessage = document.querySelector('.theResult');
const scoreMessage = document.querySelector('.scores');
updateScore();
// ---------------------------------------------------------------
let coinOutcomes = ['Heads','Tails'];
let outcomes = ''
function coinOutput(){
    let formula = Math.floor(Math.random()*2);
    outcomes = coinOutcomes[formula];
}
// ---------------------------------------------------------------
function playGame(yourMove){
    if(yourMove === outcomes){
        // console.log(`Great!, you got ${outcomes}`);
        theMessage.innerHTML = `You Win!... you got ${outcomes}`;
        score.wins += 1;
    }else{
        theMessage.innerHTML = `You Lose!... you got ${outcomes}`;
        score.loses += 1;
    }
    localStorage.setItem('Score',JSON.stringify(score));
    updateScore();
}
// ---------------------------------------------------------------
function updateScore(){
    scoreMessage.innerHTML = `Wins : ${score.wins}   Loses : ${score.loses}`;
}
// ---------------------------------------------------------------
function reset(){
    if(score.wins != 0 || score.loses != 0){
        score.wins = 0;
        score.loses = 0;
    }
    updateScore();
}
// ---------------------------------------------------------------

