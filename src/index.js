
import readlineSync from 'readline-sync'; // Импортируем readline-sync

const askName = () => readlineSync.question('May I have your name?'); // Ask user name

const hello = name => console.log(`Hello ${name}, nice to meet you!`); // Say hello

const welcome = () => console.log('Welcome to the Brain Games!'); // Head

const greeting = (rules) => { // Show greeting message
  welcome();
  console.log(rules); // Rules explain
  console.log(' '); // Empty string for devide
};

const correct = () => console.log('Correct!'); // If answer correct

const unCorrect = (w, r, name) => { // If answer is uncorrect
  console.log(`'${w}' is wrong answer ;(. Correct answer was '${r}'`);
  console.log(`Let's try again, ${name}!`);
  return;
};

const question = str => console.log(`Question: ${str}`); // Say question

const answer = () => readlineSync.question('Your answer: '); // Ask answer

const random = () => Math.floor(Math.random() * 1000); // Random number from 0 to 1000

const congratulations = name => console.log(`Congratulations, ${name}`); // Final congratulations message

export { welcome, greeting, askName, hello,
  correct, answer, unCorrect, question, random,
  congratulations };
