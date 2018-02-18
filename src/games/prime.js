
import { cons } from 'hexlet-pairs';
import { random, game } from '../index';

export default function prime() {
  const rules = 'What number is missing in this progression?'; // Rules
  const generateQuastionAndAnswer = () => { // Return pair question-answer
  // Here we describe a function that generates a question-answer pair and
  // returns it as a pair
    const isPrime = (number) => { // A function that checks for a prime number
      if (number < 2) {
        return false;
      }
      for (let i = 2; i < number; i += 1) {
        if (number % i === 0) {
          return false;
        }
      }
      return true;
    };
    const question = random(1000); // Initialize veriable for question
    const answer = (quest) => { // Function that return answer
      if (isPrime(quest)) {
        return 'yes'; // If number is prime
      } return 'no'; // If number is not prime
    };
    return cons(question, answer(question)); // Return pair question-answer
  };
  game(rules, generateQuastionAndAnswer); // Run game
}
