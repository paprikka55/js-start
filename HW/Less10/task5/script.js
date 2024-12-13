/*Задание 5 Необязательное задание
Описание задачи: Есть два массива en и ru. Объедините их в объект, где значения из
первого массива будут ключами, а значения из второго массива — значениями.
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница",
"суббота", "воскресенье"];
*/

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = [
	"понедельник",
	"вторник",
	"среда",
	"четверг",
	"пятница",
	"суббота",
	"воскресенье",
];

const translatedWeekItems = {};

if (en.length !== ru.length) {
	console.log("Ошибка! Массивы разной длины!");
} else {
	for (let item in en) {
		translatedWeekItems[en[item]] = ru[item];
	}
	console.log(translatedWeekItems);
}
