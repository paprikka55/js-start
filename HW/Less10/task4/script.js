/*Описание задачи:
1. Выведите в консоль массив продуктов, у которых есть хотя бы одна
фотография, используя метод filter.
2. Отсортируйте массив products по цене в порядке возрастания и выведите
отсортированный массив в консоль.
const products = [
{
id: 3,
price: 127,
photos: ["1.jpg", "2.jpg"],
},
{
id: 5,
price: 499,
photos: [],
},
{
id: 10,
price: 26,
photos: ["3.jpg"],
},
{
id: 8,
price: 78,
},
];
*/
const products = [
	{
		id: 3,
		price: 127,
		photos: ["1.jpg", "2.jpg"],
	},
	{
		id: 5,
		price: 499,
		photos: [],
	},
	{
		id: 10,
		price: 26,
		photos: ["3.jpg"],
	},
	{
		id: 8,
		price: 78,
	},
];

console.log(
	products.filter(function (item) {
		return item.photos && item.photos.length > 0;
	})
);

products.sort(function (min, max) {
	return min.price - max.price;
});

console.log(products);
