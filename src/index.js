
import readlineSync from 'readline-sync'; // Импортируем readline-sync

const greeting = () => {
  const name = readlineSync.question('May I have your name?'); // Спрашиваем имя
  return console.log(`Hello ${name}, nice to meet you!`); // Возвращаем сообщение
};

const question = str => console.log(`Question: ${str}`);

const even = () => {
  console.log('Welcome to the Brain Games!'); // Приветствие
  console.log('Answer "yes" if number even otherwise answer "no".'); // Rules
  const name = readlineSync.question('May I have your name?'); // Спрашиваем имя
  console.log(`Hello ${name}, nice to meet you!`); // Возвращаем сообщение

  const correct = () => console.log('Correct!');

  const unCorrect = (w, r) => {
    console.log(`'${w}' is wrong answer ;(. Correct answer was '${r}'`);
    console.log(`Let's try again, ${name}!`);
  };

  for (let i = 1; i < 4; i += 1) {
    console.log(`${question(i)} `);
    const answer = readlineSync.question('Your answer: ');
    if (i % 2 === 0) {
      if (answer === 'yes') {
        correct();
      } else {
        unCorrect(answer, 'yes');
        return;
      }
    } else {
      if (answer === 'no') {
        correct();
      } else {
        unCorrect(answer, 'no');
        return;
      }
    }
  }

  console.log(`Congratulations, ${name}`);
};

export { greeting, even };
