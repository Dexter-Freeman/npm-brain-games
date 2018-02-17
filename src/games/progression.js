
import { cons, car, cdr } from 'hexlet-pairs';
import { random, game } from '../index';

export default function progression() {
  const rules = 'What number is missing in this progression?'; // Rules
  const generateQuastionAndAnswer = () => { // Return pair question-answer
  // Here we describe a function that generates a question-answer pair and
  // returns it as a pair
    const pair = cons(random(20), random(10)); // Variable for storing numbers
    // used in the game
    const progressionGenerator = (base, step) => { // Function to generate progression
      const arr = []; // Create an empty array
      arr.unshift(base); // The first element do base
      for (let i = 0; i < 8; i++) {
        arr.push(arr[i] + step); // Generate the following sequence element by adding a step
      } return arr; // Return the resulting sequence as an array
    };
    const bone = random(9); // the element number of the array
    const answer = arr => arr[bone]; // Answer - array element with an index of bone
    const question = (arr) => {
      arr.splice(bone, 1, '..'); // Replace the array element with index bone
      return arr.join(' '); // Return the question string
    };
    const answerString = answer(progressionGenerator(car(pair), cdr(pair)));
    const questionString = question(progressionGenerator(car(pair), cdr(pair)));
    // Return pair question-answer
    return cons(questionString, answerString);
  };
  game(rules, generateQuastionAndAnswer); // Run game
}
