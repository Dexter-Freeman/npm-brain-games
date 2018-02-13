
import readlineSync from 'readline-sync'; // Импортируем readline-sync

const askName = () => readlineSync.question('May I have your name?'); // Спрашиваем имя

const hello = name => console.log(`Hello ${name}, nice to meet you!`); // Возвращаем сообщение

const welcome = () => console.log('Welcome to the Brain Games!'); // Head

const greeting = (rules) => {
  welcome();
  console.log(rules); // Rules explain
  console.log(' '); // Empty string for devide
};

const correct = () => console.log('Correct!');

const unCorrect = (w, r, name) => {
  console.log(`'${w}' is wrong answer ;(. Correct answer was '${r}'`);
  console.log(`Let's try again, ${name}!`);
};

const question = str => console.log(`Question: ${str}`);

const answer = () => readlineSync.question('Your answer: ');

const random = () => Math.floor(Math.random() * 1000);

const congratulations = name => console.log(`Congratulations, ${name}`);

export { welcome, greeting, askName, hello,
  correct, answer, unCorrect, question, random,
  congratulations };
