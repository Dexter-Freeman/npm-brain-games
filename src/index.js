
import readlineSync from 'readline-sync'; // Импортируем readline-sync

const askName = () => readlineSync.question('May I have your name?'); // Ask user name

const hello = (name) => {
  console.log(`Hello ${name}, nice to meet you!`); // Say hello
  console.log(' '); // Empty string for devide
};

const welcome = () => console.log('Welcome to the Brain Games!'); // Head

const greeting = (rules) => { // Show greeting message
  welcome();
  console.log(rules); // Rules explain
  console.log(' '); // Empty string for devide
};

const correct = () => console.log('Correct!'); // If user answer correct

const unCorrect = (w, r, userName) => { // If answer is uncorrect
  console.log(`'${w}' is wrong answer ;(. Correct answer was '${r}'`);
  console.log(`Let's try again, ${userName}!`);
};

const question = str => console.log(`Question: ${str}`); // Say question

const answer = () => readlineSync.question('Your answer: '); // Ask user answer

const random = (num) => {
  if (num === undefined) {
    num = 1000;
  }
  return Math.floor(Math.random() * num); // Random number from 0 to 1000
};

const congratulations = userName => console.log(`Congratulations, ${userName}`); // Final congratulations message

export { welcome, greeting, askName, hello,
  correct, answer, unCorrect, question, random,
  congratulations };
