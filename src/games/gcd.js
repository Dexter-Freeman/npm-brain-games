
import { cons } from 'hexlet-pairs'; // Импортируем hexlet-pairs
import { game } from '../games/gamesprocess/games-process';

const gcd = () => {
  const rules = 'Find the greatest common divisor of given numbers.'; // Rules
  const iter = 3; // Count of game iteration
  const generateQuastionAndAnswer = () => { // Return pair question-answer
  // Тут описываем функцию, которая генерирует пару вопрос-ответ и возвращает ее в виде пары
    const quest = '5 + 6'; // ... Описываем генерацию вопроса

    const answ = 6; // ... Описываем генерацию ответа

    return cons(quest, answ); // Return pair question-answer
  };

  game(rules, generateQuastionAndAnswer, iter); // Run game
};

export { gcd };
