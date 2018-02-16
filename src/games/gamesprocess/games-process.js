
import { car, cdr } from 'hexlet-pairs'; // Импортируем hexlet-pairs
import { answer, question, correct, unCorrect, congratulations, askName, greeting, hello } from '../../index';

const gameIteration = (userName, func, iter) => {
  if (iter === 0) { // Terminal condition
    congratulations(userName); // // Final congratulations message
  } else {
    const questionAnswer = func(); // Generate a question-answer pair
    question(car(questionAnswer)); // Say question
    const userAnswer = answer(); // Ask user answer
    if (userAnswer === `${cdr(questionAnswer)}`) { // If user answer is correct
      correct(); // Show message "Correct!"
      const iterNew = iter - 1; // Reduce the counter
      gameIteration(userName, func, iterNew); // Recursive call
    } else {
      unCorrect(userAnswer, cdr(questionAnswer), userName); // If answer is uncorrect
    }
  }
};

const game = (rules, func) => {
  const iter = 3; // Count of game iteration
  greeting(rules); // Show greeting message
  const userName = askName();
  hello(userName); // Say hello
  gameIteration(userName, func, iter); // Ask user name
};

export { gameIteration, game };
