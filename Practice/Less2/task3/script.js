/*Задание 3 (тайминг 15 минут)
1. Сознательно допустите ошибку в вашем коде. Убедитесь, что
ошибка появляется в консоли. Определите, в какой строке кода
случилась ошибка.
2. Необходимо вывести в консоль результат суммы данных
переменных
a. let a = '2';
b. let b = '3';
3. Пользователь с клавиатуры вводит 2 числа, необходимо в консоль
вывести текст
a. Сумма чисел равна “результат”
b. Разность чисел равна “результат”
c. Произведение чисел равно “результат”
d. Частное чисел равно “результат”
e. Остаток от деления чисел равен “результат”*/

//1--------------
// alwrt(wd);

//2--------------

let a = "2";
let b = "3";
console.log(parseInt(a) + parseInt(b));

//3--------------

let number1 = parseFloat(prompt("Введите первое число:"));
let number2 = parseFloat(prompt("Введите второе число:"));

console.log(`Введены числа ${number1} и ${number2}`);
console.log(`Сумма чисел равна ${number1 + number2}`);
console.log(`Разность чисел равна ${number1 - number2}`);
console.log(`Произведение чисел равна ${number1 * number2}`);
console.log(`Частное чисел равна ${number1 / number2}`);
console.log(`Остаток от деления чисел равна ${number1 % number2}`);
