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
	add(name, price, amountProduct = 1) {
		const obj = {
			productName: name,
			productPrice: price,
			productCount: amountProduct
		};
		this.increaseCount();
		this.calculateItemPrice();
		this.calculateItemCount();
		this.items.push(obj);
	},
	//Увеличить количество товаров
	increaseCount(numb = 0) {
		return this.count += numb
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
			Общее количество товаров: ${this.calculateItemCount()}
		` )
	}
}


cart.add('Принтер', 3600, 4);
cart.add('iMac', 160000, 1);
cart.add('iPhone', 170000, 2);


cart.print();