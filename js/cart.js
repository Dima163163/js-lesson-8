'use strict';

const cart = {
  items: [],
  count: 0,
  get totalPrice() {
    return this.calculateItemPrice();
  },
  add(name, price, count = 1) {
    const obj = {
      name,
      price,
      count,
    };
    this.increaseCount();
    this.items.push(obj);
    this.calculateItemCount();
  },
  increaseCount(numb = 0) {
    this.count += numb;
  },
  calculateItemPrice() {
    return this.items.reduce((acc, item) =>
      acc += (item.price * item.count), 0);
  },
  calculateItemCount() {
    this.count = this.items.reduce((acc, item) =>
      acc += item.productCount
    , 0);
  },
  clear() {
    this.items = [];
  },
  print() {
    console.log(`Товары: ${JSON.stringify(this.items)} 
      \n 
      Общая стоимость: ${this.totalPrice}
      \n
      Общее количество товаров: ${this.count}
    `);
  },
};



cart.add('Принтер', 3600, 4);
cart.add('iMac', 160000, 1);
cart.add('iPhone', 170000, 2);
cart.add('iPad', 90000, 4);
cart.add('Телевизор', 105000, 5);
cart.add('Чайник', 5000, 6);


cart.print();
