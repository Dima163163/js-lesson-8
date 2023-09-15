'use strict';

const cart = {
	items: [],
	totalPrice: 0,
	count: 0,
	//Получить общую стоимость товаров
	getTotalPrice() {
		return this.totalPrice;
	},
	//Добавить товар
	add(productName, productPrice, productCount = 1) {
		const obj = {
			productName,
			productPrice,
			productCount
		};
		this.increaseCount();
		this.items.push(obj);
		this.calculateItemPrice();
		this.calculateItemCount();
	},
	//Увеличить количество товаров
	increaseCount(numb = 0) {
		return this.count += numb;
	},
	//Посчитать общую стоимость товаров
	calculateItemPrice() {
		return this.totalPrice = this.items.reduce((acc, item) => {
			return acc += (item.productPrice * item.productCount)
		}, 0)
	},
	//Посчитать общее количество товаров
	calculateItemCount() {
		return this.count = this.items.reduce((acc, item) => {
			return acc += item.productCount
		}, 0)
	},
	//Отчистить корзину
	clear() {
		return this.items = [];
	},
	//Распечатать корзину
	print() {
		console.log(`Товары: ${JSON.stringify(this.items)} 	\n 
			Общая стоимость: ${this.calculateItemPrice()}
		\n
			Общее количество товаров: ${this.count}
		` )
	}
}


cart.add('Принтер', 3600, 4);
cart.add('iMac', 160000, 1);
cart.add('iPhone', 170000, 2);
cart.add('iPad', 90000, 4);
cart.add('Телевизор', 105000, 5);
cart.add('Чайник', 5000, 6);


cart.print();