/*Описание задачи: Дан массив products. Уменьшите цену каждого продукта на 15% с
использованием метода forEach.
const products = [
{
id: 3,
price: 200,
},
{
id: 4,
price: 900,
},
{
id: 1,
price: 1000,
},
];
*/

const products = [
	{
		id: 3,
		price: 200,
	},
	{
		id: 4,
		price: 900,
	},
	{
		id: 1,
		price: 1000,
	},
];

products.forEach(function (item) {
	item.price = (item.price * 0.85).toFixed(2);
});
console.log(products);
