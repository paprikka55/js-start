/*Задание 4 (Необязательное)
Описание задачи:
1. Получите от пользователя число.
2. Выведите разряды числа: количество сотен, десятков и единиц.
*/
let number = parseInt(prompt("Введите целое число:"));
let digitsCount = 0;

if (number === NaN) {
	alert("Ошибка: некорректный ввод!");
} else {
	console.log(`Вы ввели число: ${number}`);
	let digit;
	while (number > 1) {
		switch (digitsCount) {
			case 0:
				digit = "Единицы:";
				break;
			case 1:
				digit = "Десятки:";
				break;
			case 2:
				digit = "Сотни:";
				break;
			case 3:
				digit = "Тысячи:";
				break;
			case 4:
				digit = "Десятки тысяч:";
				break;
			case 5:
				digit = "Сотни тысяч:";
				break;
			case 6:
				digit = "Миллионы:";
				break;
			default:
				digit = "Разряды больше миллиона:";
				break;
		}
		console.log(`${digit} ${number % 10}`);
		number = Math.floor(number / 10);
		digitsCount++;
	}
}
