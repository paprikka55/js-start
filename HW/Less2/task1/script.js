/*Задание 1
Описание задачи:
1. Создайте переменные num1 и num2, значения которых пользователь вводит с
клавиатуры.
2. Проверьте, что переменная num1 меньше или равна 1, а переменная num2
больше или равна 3.*/

let num1 = parseFloat(prompt("Введите первое число: ", 1));
let num2 = parseFloat(prompt("Введите второе число: ", 3));
console.log(
	"Проверка условия: переменная num1 меньше или равна 1, а переменная num2 больше или равна 3..."
);

num1 <= 1 && num2 >= 3
	? console.log("Условия выполнено!")
	: console.log("Условия не выполнены!");
