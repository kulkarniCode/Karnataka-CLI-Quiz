const read = require('readline-sync');
const chalk = require('chalk');
const fonts = require('cfonts');

// TODO: define color palette

const title = 'Karnataka Quiz';
fonts.say(title, {font: 'tiny', align: 'left'});

let userName = read.question('PLease enter your name:\t');
console.log(`Welcome ${userName}, to "${title}".\n`);

function displayInstructions() {
  console.log(`INSTRUCTIONS:
1. There are 5 questions in the quiz.
2. For each correct answer you will gain 2 points.
3. For each incorrect answer you will lose 1 point.
4. Correct answer for every question will be displayed after your attempt.\n`);
}

function startQuiz() {
  const start = read
    .question('Are you ready for the challenge? (Y/N)\t')
    .toLowerCase();
  if (start === 'n') {
    console.log('Come back when you are ready!\n');
  } else {
    console.log("Then let's get started!\n");
    displayInstructions();
    game();
    showScores();
  }
}

const questionBank = [
  {
    question: `Jog Falls which is one of the highest waterfalls in India, is created by ___.
    a. Sharavati River
    b. Kaveri River
    c. Tunga River
    d. Krishna River\n`,
    option: 'a',
    answer: 'a. Sharavati River',
  },
  {
    question: `Karnataka is the ___ largest Indian state by area.
    a. fourth
    b. fifth
    c. sixth
    d. seventh\n`,
    option: 'c',
    answer: 'c. sixth',
  },
  {
    question: `Which of the following cities in Karnataka is known as the Golden City of India?
    a. Hampi
    b. Kolar
    c. Badami
    d. Bengaluru\n`,
    option: 'b',
    answer: 'b. Kolar',
  },
  {
    question: `Who had written the book "Kavirajamarga"?
    a. Amoghavarsha I
    b. Adikavi Pampa
    c. Nagavarma I
    d. Chavundaraya II\n`,
    option: 'a',
    answer: 'a. Amoghavarsha I',
  },
  {
    question: `Which day is celebrated as Karnataka Rajyotsava?
    a. 1st October
    b. 16th October
    c. 1st November
    d. 3rd November\n`,
    option: 'c',
    answer: 'c. 1st November',
  },
];

let userScore = 0;

function evaluateQuiz(question, option, answer) {
  let userAnswer = read.question(question);
  if (userAnswer.toLowerCase() === option) {
    console.log(`Correct Answer 😃`);
    userScore += 2;
  } else {
    console.log(`Incorrect Answer ☹️`);
    console.log(`The correct answer is: ${answer}`);
    userScore -= 1;
  }
  console.log(`----------------------------------------------------------`);
}

// display questions and accept answers
function game() {
  console.log(`----------------------------------------------------------`);
  for (let i in questionBank) {
    let currentQuestion = questionBank[i];
    evaluateQuiz(
      currentQuestion.question,
      currentQuestion.option,
      currentQuestion.answer
    );
  }
}

let highScores = [
  {
    name: 'Madhusudan(Me)',
    score: 10,
  },
  {
    name: 'FriendOne',
    score: 10,
  },
  {
    name: 'FriendTwo',
    score: 7,
  },
];

function showScores() {
  console.log(chalk.underline.bold`\n${userName} scored ${userScore} points.`);
  let highScorer =
    userScore >= 7 ? `Congrats! ${userName} You are a high scorer!` : '';
  console.log(highScorer);
  console.log(chalk.underline`\nScore Board:`);
  highScores.map((user) =>
    console.log(`${user.name} scored ${user.score} points.`)
  );
}

startQuiz();
