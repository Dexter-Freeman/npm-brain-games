// @flow

import readlineSync from 'readline-sync'; // Импортируем readline-sync

const greeting = () => {
  const name = readlineSync.question('May I have your name?'); // Спрашиваем имя
  return console.log(`Hello ${name}, nice to meet you!`); // Возвращаем сообщение
};

export { greeting };
