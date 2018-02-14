
import { cons, car, cdr, } from 'hexlet-pairs'; // Импортируем hexlet-pairs
import { greeting, askName, answer, hello, correct, unCorrect, question, random, congratulations } from '../index';

const calc = () => {
  const rules = 'Answer "yes" if number even otherwise answer "no".'; // Задаем условия игры
  greeting(rules); // Показываем приветствие с правилами
  const name = askName(); // Спрашиваем имя
  hello(name); // Приветствуем пользователя

  let pair = cons(random(), random()); // Переменная для хранения чисел, используемых в игре
  question(`${car(pair)} + ${cdr(pair)}`); // Задаем вопрос
  let userAnswer = answer(); // Получаем ответ
  if (`${(car(pair) + cdr(pair))}` === userAnswer) { // Проверяем ответ
    correct(); // Если ответ верный
  } else {
    unCorrect(userAnswer, (car(pair) + cdr(pair)), name); // Если ответ не верный
    return;
  }
  pair = cons(random(), random()); // Записываем новые числа в переменную и повторяем с другими операторами
  question(`${car(pair)} - ${cdr(pair)}`);
  userAnswer = answer();
  if (`${(car(pair) - cdr(pair))}` === userAnswer) {
    correct();
  } else {
    unCorrect(userAnswer, (car(pair) - cdr(pair)), name);
    return;
  }
  pair = cons(random(), random());
  question(`${car(pair)} * ${cdr(pair)}`);
  userAnswer = answer();
  if (`${(car(pair) * cdr(pair))}` === userAnswer) {
    correct();
  } else {
    unCorrect(userAnswer, (car(pair) * cdr(pair)), name);
    return;
  }
  congratulations(name);
};

export { calc };
