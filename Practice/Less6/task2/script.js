/*Задание 2 (тайминг 15 минут)
1. Сделайте функцию, которая параметрами принимает 3 числа и
выводит в консоль сумму этих чисел.
2. С помощью созданной вами функции выведите в консоль сумму
значений этих переменных.
let param1 = 1;
let param2 = 2;
let param3 = 3;
1. Дана фукнция
function func(num = 5) {
console.log(num * num);
}
Расскажите, каким будет результат каждого из вызовов функции.
func(2);
func(3);
func();*/

//1 ------------

const sumNums = (num1, num2, num3) => num1 + num2 + num3;
// console.log(sumNums(1, 2, 3));

//2 ------------
let param1 = 1;
let param2 = 2;
let param3 = 3;

const printSumNumbers = (number1, number2, number3) => {
	console.log(number1 + number2 + number3);
};

printSumNumbers(param1, param2, param3);

// 3 -----------
/*
func(2) -> 4
func(3) -> 9
func() -> 25
*/
