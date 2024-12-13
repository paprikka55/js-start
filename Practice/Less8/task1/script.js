/*Задание 1 (тайминг 20 минут)
Текст задания
1. Создайте массив с элементами 1, 2, 3. Выведите на экран
каждый из этих элементов.
2. Создайте массив с произвольными элементами.
Выведите на экран количество элементов в этом
массиве.
3. Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо
первого элемента число 1, вместо второго - 2, вместо
третьего - 3.*/

//1 ------

// let arr = [1, 2, 3];
// for (let i in arr) {
// 	console.log(arr[i]);
// }

//arr.forEach((el) => console.log(el));

//2 ---------
const generateRandomArray = (length, maxValue) =>
	[...new Array(length)].map(() => Math.round(Math.random() * maxValue));

let rndArr = generateRandomArray(10, 25);
console.log(`Массив: ${rndArr}`);
console.log(`Длинна массива: ${rndArr.length}`);

//3 ----------
let arr3 = ["a", "b", "c"];
console.log(arr3);
arr3[0] = 1;
arr3[1] = 2;
arr3[2] = 3;

console.log(arr3);
