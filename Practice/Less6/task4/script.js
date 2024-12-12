/*Задание 4 (тайминг 25 минут)
1. Сделайте функцию, которая принимает параметром число от 1 до 7,
а возвращает день недели на русском языке.
2. Написать функцию, которой передаем имя и она возвращает
приветствие в зависимости от времени суток (Доброе
утро\день\вечер\ночи Иван)*/

//1 --------------

function getDayByNumber(number) {
	switch (number) {
		case 1:
			return "Понедельник";
			break;
		case 2:
			return "Вторник";
			break;
		case 3:
			return "Среда";
			break;
		case 4:
			return "Четверг";
			break;
		case 5:
			return "Пятница";
			break;
		case 6:
			return "Суббота";
			break;
		case 7:
			return "Воскресение";
			break;
		default:
			return "Ошибка ввода, число должно быть от 1 до 7!";
			break;
	}
}

// console.log(getDayByNumber(4));

//2 -------------

function sayHelloForUser(name) {
	let hours = new Date().getHours();
	if (hours >= 0 && hours < 4) {
		return `Доброй ночи ${name}!`;
	} else if (hours >= 4 && hours < 12) {
		return `Доброе утро ${name}!`;
	} else if (hours >= 12 && hours < 16) {
		return `Добрый день ${name}!`;
	} else {
		return `Добрый вечер ${name}!`;
	}
}

// console.log(sayHelloForUser("paprikka"));
let userName = prompt("Введите имя пользователя:");
alert(sayHelloForUser(userName));
