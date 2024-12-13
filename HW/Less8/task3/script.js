/*Задание 3
Описание задачи:
1. Сгенерируйте массив из 5 случайных цифр от 0 до 9.
2. Рассчитайте сумму элементов массива.
3. Найдите минимальное число в массиве.
4. Определите, есть ли в массиве число 3.*/

const getRandomArray = (length) => {
	let arr = [];
	for (let i = 0; i <= length; i++) {
		arr.push(Math.floor(Math.random() * 10));
	}
	return arr;
};
const arr = getRandomArray(5);
const calcSumArrayElements = arr.reduce(function (sum, current) {
	return sum + current;
}, 0);
console.log(`Массив: ${arr}`);
console.log(`Сумма элементов массива: ${calcSumArrayElements}`);
console.log(`Минимальное число в массиве: ${Math.min(...arr)}`);
if (arr.includes(3)) {
	console.log("В массиве есть число 3");
} else {
	console.log("В массиве нет числа 3");
}
