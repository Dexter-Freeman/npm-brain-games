
import { cons, car, cdr, toString } from 'hexlet-pairs'; // Импортируем hexlet-pairs
import { random } from '../index';
import { game } from '../games/gamesprocess/games-process';

const calc = () => {
  const rules = 'What is the result of the expression?'; // // Rules
  const iter = 3; // Count of game iteration

  const generateQuastionAndAnswer = () => { // Return pair question-answer
  // Тут описываем функцию, которая генерирует пару вопрос-ответ и возвращает ее в виде пары
    const pair = cons(random(), random()); // Переменная для хранения чисел, используемых в игре
    console.log(`pair - ${toString(pair)}`);
    const chooseOperand = random(); // Условие для выбора операнда
    let question; // Initialize veriable for question
    let answer; // Initialize veriable for answer
    // Then select the operand
    if (chooseOperand < 300) {
      question = `${car(pair)} + ${cdr(pair)}`;
      answer = car(pair) + cdr(pair);
    } else if (chooseOperand > 700) {
      question = `${car(pair)} - ${cdr(pair)}`;
      answer = car(pair) - cdr(pair);
    } else {
      question = `${car(pair)} * ${cdr(pair)}`;
      answer = car(pair) * cdr(pair);
    }
    return cons(question, answer); // Return pair question-answer
  };
  // generateQuastionAndAnswer();
  game(rules, generateQuastionAndAnswer, iter); // Run game
};

export { calc };
