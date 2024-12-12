/*Задание 4
Описание задачи: Реализуйте четыре функции, каждая из которых выполняет одну из
следующих операций с двумя числами:
1. Сложение
2. Вычитание
3. Умножение
4. Деление
Функции должны возвращать результат операции.
*/

const sumNumbers = (num1, num2) => num1 + num2;
const subtractNumbers = (num1, num2) =>
	num1 > num2 ? num1 - num2 : num2 - num1;
const multiplyNumbers = (num1, num2) => num1 * num2;
const divideNumbers = (num1, num2) => (num2 !== 0 ? num1 / num2 : Infinity);
