
import { cons, car, cdr } from 'hexlet-pairs';
import { random, game } from '../index';

export default function calc() {
  const rules = 'What is the result of the expression?'; // Rules
  const generateQuastionAndAnswer = () => { // Return pair question-answer
  // Here we describe a function that generates a question-answer pair and returns it as a pair
    const pair = cons(random(100), random(100)); // Variable for storing numbers used in the game
    const chooseOperand = random(); // The condition for selecting an operand
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
  game(rules, generateQuastionAndAnswer); // Run game
}
