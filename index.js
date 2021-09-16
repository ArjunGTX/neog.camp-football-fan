let promptLine = require('readline-sync');
//reading username
let userName = promptLine.question("What's your name? ");

//function to print welcome messgae
function welcomeUser(userName) {
  console.log(`Hai ${userName}, Lets test your knowledge on Football.`);
}
welcomeUser(userName);

//setting points to 0
let points = 0;

//questions array
const quiz = [
  {
    question: "\nWho has scored the most number of international goals? ",
    answer: 'Ronaldo'
  },
  {
    question: "\nWho has the most number of golden boots? ",
    answer: "Messi"
  },
  {
    question: "\nWhich country has the most number of World cups? ",
    answer: "Brazil"
  },
  {
    question: "\nWhich Football club has the most number of Uefa Champions League Titles? ",
    answer: "Real Madrid"
  },

  {
    question: "\nWhich team won the Copa America 2021? ",
    answer: "Argentina"
  }
];

//setting the high score
const highScore = [
  {
    name: "Brad",
    points: 50
  }
];

//asking each question
quiz.forEach((element) => {
  let userAnswer = promptLine.question(element.question);
  if(userAnswer === element.answer) {
   //incrementing score
      points += 10;
      console.log(`Wow ${userName}, good job. You got 10 points`);
    }
    else {
      console.log("Oops!,Thats wrong.");
    }
});

//printing final score
if(points === 0){
  console.log(`\nYou got only ${points} points.\n No problem try once more.`)
}
else if(points > 0 || points <4) {
  console.log(`\nGreat job ${userName}, you got ${points} points.`);
}
else {
  console.log(`\nExcellent work ${userName}, you got ${points} points. You really are a Football fan!`)
} 

//function to print highscore
function printHighScore() {
  console.log("\n\nHigh Score : \n")
  highScore.forEach((element) => {
    console.log(`\t${element.name} -> ${element.points} points.`)
  })
}
printHighScore();