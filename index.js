var readlinesync = require('readline-sync')
const chalk = require('chalk');
var userName = readlinesync.question("What's your name? ");

console.log("Hi, Welcome! " + userName + " Let's see How well do you remember Interstellar movie?.");

var score = 0
 
function play (question, answer){
  var userAnswer = readlinesync.question(chalk.red(question))
  if (userAnswer.toUpperCase() === answer.toUpperCase() ) {
    console.log("YAY! Correct answer (+10 pts) ")
    score += 10
    console.log(chalk.cyan("Score: " + score))
  } else{
    console.log("OOPS! Wrong answer ")
  }
}

let questions = [{
  question: "Who was the director of Interstellar? ",
  answer : "Cristopher Nolan"
},{
  question: "What natural disaster is happening on Earth, that will eventually cause the human race to go extinct? ",
  answer : "Dust Storms"
},{
  question: " What does the message from the ghost say in Murphy's room. ",
  answer : "STAY"
}, {
  question: "Cooper realizes that the lines are caused by ",
  answer : "Gravity"
},{
  question: "Interstellar music was done by? ",
  answer : "Hans Zimmer"
}];

for (var i=0 ; i < questions.length ; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log(chalk.green("YAY!! Your final score is " + score));
