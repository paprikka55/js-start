/*Задание 1
Описание задачи: Дан объект numbers. Необходимо вывести в консоль все значения,
которые больше или равны 3.
const numbers = {
keyin1: 1,
keyin2: 2,
keyin3: 3,
keyin4: 4,
keyin5: 5,
keyin6: 6,
keyin7: 7,
};
*/

const numbers = {
	keyin1: 1,
	keyin2: 2,
	keyin3: 3,
	keyin4: 4,
	keyin5: 5,
	keyin6: 6,
	keyin7: 7,
};

for (const key in numbers) {
	if (numbers[key] >= 3) {
		console.log(`Ключ: ${key}, значение: ${numbers[key]}`);
	}
}
