
import { cons, car, cdr, toString } from 'hexlet-pairs'; // Импортируем hexlet-pairs
import { greeting, askName, answer, hello, correct, unCorrect, question, random, congratulations } from '../index';

const game = (rules) => {
  greeting(rules); // Show rules of the game
  const name = askName(); // Ask name of user
  hello(name); // Say hello

  for (let i = 1; i < 4; i += 1) {
    const num = random();
    question(num);
    const userAnswer = answer();
    if (num % 2 === 0) {
      if (userAnswer === 'yes') {
        correct();
      } else {
        unCorrect(userAnswer, 'yes', name);
        return;
      }
    } else if (userAnswer === 'no') {
      correct();
    } else {
      unCorrect(userAnswer, 'no', name);
      return;
    }
  }

  congratulations(name);
};

export { game };
