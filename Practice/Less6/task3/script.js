/*Задание 3 (тайминг 15 минут)
1. Сделайте функцию, которая параметром принимает число, а
возвращает квадратный корень из этого числа. С помощью этой
функции найдите корень числа 3, затем найдите корень числа 4.
Просуммируйте полученные результаты и выведите их в консоль.
2. Создайте функцию, которая находит минимальное число из 2х
передаваемых аргументов функции*/

//1 -------------
const calcSqrt = (number) => Math.sqrt(number);

//console.log(calcSqrt(3) + calcSqrt(4));

//2 -------------
const findMin = (number1, number2) => (number1 > number2 ? number2 : number1);

console.log(findMin(3, 4));