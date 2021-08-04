const readlineSync = require("readline-sync");
const chalk= require('chalk');

//take username input
console.log(chalk.yellowBright.bgBlue.bold("     😑 DO YOU EVEN KNOW ME? 😑      \n\n"));
const userName= readlineSync.question(chalk.cyanBright("Enter your gameplay username : "));

console.clear();

//welcome and rules
console.log(chalk.yellowBright.bgBlue.bold("     😑 DO YOU EVEN KNOW ME? 😑      \n\n"));
console.log(chalk.hex('#DEADED')("  Hi "+chalk.red.bold.underline(userName)+" welcome to the QUIZ"+".\nEnter 1, 2, 3 or 4 for each question to answer. For each correct answer you will get "),chalk.bgYellow(" 2 points.\n\n"));

//start game
var score = 0;
function checkAnswer(question,answer,options,qno){

  console.log(chalk.inverse.red(qno,"."),chalk.redBright(question));
  var userAnswer = readlineSync.keyInSelect(options, 
                                          "Enter your option : ", 
                                          {cancel : false}
                                          );
  if(options[userAnswer] == answer){
    console.log(chalk.inverse.green("\n You are right!!! 😏 \n"))
    score = score + 2
  }
  else{
    console.log(chalk.bgRed("\n You are wrong 😑 \n"))
  }
  console.log(chalk.yellow("Score : ",score,"\n"))
  console.log(chalk.magenta("=================================\n"))
}

var questionsArr = [
  {question : "What is my full name? : ",
  options : ["Aniket Prakash", "Aniket Behera", "Aniket Prakash Behera", "Aniket Dash"],
  answer : "Aniket Prakash Behera"},
  {question : "What is my age? : ",
  options : [19,20,21,22],
  answer : 21},
  {question : "Where do I live? : ",
  options : ["Bhubaneswar","Balasore","Bhadrak","Baripada"],
  answer : "Baripada"},
  {question : "Which type of food do I like? : ",
  options : ["North Indian","Chinese","South Indian"],
  answer : "North Indian"},
  {question : "Which movies genre do I prefer? : ",
  options : ["Drama","Comedy","Horror","Mystery"],
  answer : "Comedy"},];

for(var i = 0;i<questionsArr.length;i++){
    checkAnswer(questionsArr[i].question,questionsArr[i].answer,questionsArr[i].options,i+1)
}


//final score and leaderboard
console.log(chalk.yellowBright.bgBlue.bold("     😑 DO YOU EVEN KNOW ME? 😑      \n\n"));
console.log(chalk.inverse.yellow("Final score : ",score,"\n"))
var highScores = [
  {
    name : 'Bijay',
    score : 4
  },
  {
    name : 'Anil',
    score : 2
  }
]
console.log('Check out the high scores: ');
console.table(highScores);
var high = false;

highScores.forEach( person => {
  if(score >  person.score){
    high = true;
  }
})

if(high){
 console.log(chalk.green(`\nYay! You made a high score! Your name will be added to the leaderboard.`));
 console.log("Just send me a screenshot of the scores!");
}
else{
  console.log(chalk.red("\n You failed to beat the highscore."))
}
