'use strict';

// const cart = {
//   items: [],
//   count: 0,
//   get totalPrice() {
//     return this.calculateItemPrice();
//   },
//   add(name, price, count = 1) {
//     const obj = {
//       name,
//       price,
//       count,
//     };
//     this.increaseCount();
//     this.items.push(obj);
//     this.calculateItemCount();
//   },
//   increaseCount(numb = 0) {
//     this.count += numb;
//   },
//   calculateItemPrice() {
//     return this.items.reduce((acc, item) =>
//       acc += (item.price * item.count), 0);
//   },
//   calculateItemCount() {
//     this.count = this.items.reduce((acc, item) =>
//       acc += item.count
//     , 0);
//   },
//   clear() {
//     this.items = [];
//   },
//   print() {
//     console.log(`Товары: ${JSON.stringify(this.items)} 
//       \n 
//       Общая стоимость: ${this.totalPrice}
//       \n
//       Общее количество товаров: ${this.count}
//     `);
//   },
// };

// cart.add('Принтер', 3600, 4);
// cart.add('iMac', 160000, 1);
// cart.add('iPhone', 170000, 2);
// cart.add('iPad', 90000, 4);
// cart.add('Телевизор', 105000, 5);
// cart.add('Чайник', 5000, 6);


// cart.print();

const Cart = function(arr = []) {
  this.goods = arr;
  this.totalPrice = 0;
  this.count = 0;
  this.addGoods = function(obj) {
    arr.push(obj);
    this.increaseCount();
  };
  this.calculateGoodsPrice = function() {
    this.totalPrice = this.goods.reduce((acc, good) =>
      acc += good.discount ?
      good.price - (good.price * good.discount / 100) : good.price, 0);
  };
  this.getTotalPrice = function() {
    return this.totalPrice;
  };
  this.increaseCount = function() {
    this.count += 1;
  };
  this.clear = function() {
    this.goods = [];
    this.totalPrice = 0;
    this.count = 0;
  };
  this.print = function() {
    console.log(`
    Товары: ${JSON.stringify(this.goods)}
    \n 
    Общая стоимость: ${this.totalPrice}`);
  };
};
const Goods = function(name, price, discount) {
  this.name = name;
  this.price = price;
  this.discount = discount;
};

const FoodGoods = function(name, price, discount, calories) {
  Goods.call(this, name, price, discount);
  this.calories = calories;
};
const ClothingGoods = function(name, price, discount, material) {
  Goods.call(this, name, price, discount);
  this.material = material;
};
const TechnicsGoods = function(name, price, discount, typeTechnic) {
  Goods.call(this, name, price, discount);
  this.typeTechnic = typeTechnic;
};

const cards = new Cart();
const imac = new TechnicsGoods('iMac', 16000, 5, 'моноблоки');
const iphone = new ClothingGoods('iPhone', 140000, 0, 'aluminum');
const bigMac = new FoodGoods('Big Mac', 300, 0, 400);

cards.addGoods(imac);
cards.addGoods(iphone);
cards.addGoods(bigMac);
cards.calculateGoodsPrice();
cards.getTotalPrice();
console.log(cards.print());
