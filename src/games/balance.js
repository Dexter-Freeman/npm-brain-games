
import { cons, car } from 'hexlet-pairs';
import { random, game } from '../index';

export default function balnce() {
  const rules = 'Find the greatest common divisor of given numbers.'; // Rules
  const generateQuastionAndAnswer = () => { // Return pair question-answer
  // Here we describe a function that generates a question-answer pair and returns it as a pair
    const pair = cons(random(10000), random(10000)); // Variable for storing numbers used in the game
    const question = `${car(pair)}`; // Initialize veriable for question
    const isBalance = (n) => { // A function that checks if a number is balanced
      if ((Number(n[n.length - 1]) - Number(n[0])) <= 1) { // If the difference between the last and first digits is less than or equal to 1
        return true;
      }
      return false; // Otherwise
    };
    const bal = (num) => { // Gets an array
      if (isBalance(num)) { // Checks if the number is balanced
        return num.join(''); // If balanced, then returns that number as a string
      } else { // Otherwise
        const n1 = Number(num[0]) + 1; // Increases the first digit by 1
        const n2 = Number(num[num.length - 1]) - 1; // Reduces the last digit by 1
        if (num.length === 2) { // If the number consists of two digits
          num.shift(); // Delete the first digit in the number
          num.pop(); // Remove the last digit in the number
          num.unshift(n1); // Replace the first digit in the number
          num.push(n2); // Заменяем последнюю цифру в числе
        } else {
          num.shift(); // Delete the first digit in the number
          num.pop(); // Remove the last digit in the number
          num.unshift(n1); // Replace the first digit in the number
          num.push(n2); // Заменяем последнюю цифру в числе
        } return balanceEngine(num.join('')); // Balancing a new number
      }
    };
    const sort = (num) => { // A function that sorts the numbers in the number in ascending order
      const unSortingString = num.split(''); // Get an array consisting of digits
      const sortedString = unSortingString.sort(); // work))
      return sortedString; // return array
    };
    const balanceEngine = (num) => { // Balance Engine
      if (num.length === 1) {
        return num; // If the number of length is 1 digit, then we return number
      }
      return bal(sort(num)); // Or pass on the sort and balancer
    };

    const answer = balanceEngine(String(question)); // Initialize veriable for answer
    return cons(question, answer); // Return pair question-answer
  };
  game(rules, generateQuastionAndAnswer); // Run game
}
