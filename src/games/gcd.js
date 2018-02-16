
import { cons, car, cdr } from 'hexlet-pairs'; // Импортируем hexlet-pairs
import { random } from '../index';
import { game } from '../games/gamesprocess/games-process';

export default function gcd() {
  const rules = 'Find the greatest common divisor of given numbers.'; // Rules
  const iter = 3; // Count of game iteration
  const generateQuastionAndAnswer = () => { // Return pair question-answer
  // Тут описываем функцию, которая генерирует пару вопрос-ответ и возвращает ее в виде пары
    const pair = cons(random(100), random(100)); // Variable for storing numbers used in the game
    const question = `${car(pair)} ${cdr(pair)}`; // Initialize veriable for question
    const num1 = car(pair); // First number
    const num2 = cdr(pair); // Second number
    const nod = (a, b) => { // NOD function - The classical Euclidean algorithm
      if (a === 0) {
        return b;
      } else if (a === 1 || a === b) {
        return a;
      }
      while (a !== b) {
        if (a > b) {
          a -= b;
        } else {
          b -= a;
        }
      } return a;
    };
    const answer = nod(num1, num2); // Initialize veriable for answer
    return cons(question, answer); // Return pair question-answer
  };
  game(rules, generateQuastionAndAnswer, iter); // Run game
}
