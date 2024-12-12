/*Задание 3
Описание задачи: Пользователь вводит с клавиатуры 3 числа. Создайте функцию,
которая определяет максимальное значение среди этих чисел.
*/
function promptNumber(serialNumber) {
	let isNum = false;
	let result;
	while (!isNum) {
		result = prompt(`Введите ${serialNumber} число: `);
		if (isNaN(result)) {
			alert("Ошибочный ввод! Нужно ввести число!");
		} else {
			isNum = true;
			return parseFloat(result);
		}
	}
}

const getMaxThree = (num1, num2, num3) => Math.max(num1, num2, num3);

let num1 = promptNumber("первое");
let num2 = promptNumber("второе");
let num3 = promptNumber("третье");

alert(`Максимальное число из введенных ${getMaxThree(num1, num2, num3)}!`);
