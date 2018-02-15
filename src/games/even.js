
import { greeting, askName, answer, hello, correct, unCorrect, question, random, congratulations } from '../index';

const even = () => {
  const rules = 'Answer "yes" if number even otherwise answer "no".';
  greeting(rules);
  const name = askName();
  hello(name);

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

export { even };
