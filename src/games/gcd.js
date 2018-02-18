
import { cons, car, cdr } from 'hexlet-pairs';
import { random, game } from '../index';

export default function gcdGame() {
  const rules = 'Find the greatest common divisor of given numbers.'; // Rules
  const generateQuastionAndAnswer = () => { // Return pair question-answer
  // Here we describe a function that generates a question-answer pair and returns it as a pair
    const pair = cons(random(100), random(100)); // Variable for storing numbers used in the game
    const question = `${car(pair)} ${cdr(pair)}`; // Initialize veriable for question
    const num1 = car(pair); // First number
    const num2 = cdr(pair); // Second number
    const gcd = (a, b) => { // GCD function - The classical Euclidean algorithm
      if (a === 0) {
        return b;
      } else if (a === 1 || a === b) {
        return a;
      }
      let a2 = a;
      let b2 = b;
      while (a2 !== b2) {
        if (a2 > b2) {
          a2 -= b2;
        } else {
          b2 -= a2;
        }
      } return a2;
    };
    const answer = gcd(num1, num2); // Initialize veriable for answer
    return cons(question, answer); // Return pair question-answer
  };
  game(rules, generateQuastionAndAnswer); // Run game
}
