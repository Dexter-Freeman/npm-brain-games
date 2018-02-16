
import { cons, car } from 'hexlet-pairs'; // Importing hexlet-pairs
import { random } from '../index';
import { game } from '../games/gamesprocess/games-process';

export default function even() {
  const rules = 'Answer "yes" if number even otherwise answer "no".'; // Rules
  const generateQuastionAndAnswer = () => { // Return pair question-answer
  // Here we describe a function that generates a question-answer pair and returns it as a pair
    const pair = cons(random(), random()); // Variable for storing numbers used in the game
    const question = car(pair); // Initialize const for question
    let answer; // Initialize veriable for answer
    if (question % 2 === 0) {
      answer = 'yes';
    } else {
      answer = 'no';
    }
    return cons(question, answer); // Return pair question-answer
  };
  game(rules, generateQuastionAndAnswer); // Run game
}
