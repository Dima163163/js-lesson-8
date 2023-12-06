'use strict';

const Cart = function(arr = []) {
  return {
    goods: arr,
    totalPrice: 0,
    count: 0,
    addGoods(obj) {
      arr.push(obj);
      this.increaseCount();
    },
    calculateGoodsPrice() {
      this.totalPrice = this.goods.reduce((acc, good) =>
        acc += good.discount ?
        good.price - (good.price * good.discount / 100) : good.price, 0);
    },
    getTotalPrice() {
      return this.totalPrice;
    },
    increaseCount() {
      this.count += 1;
    },
    clear() {
      this.goods = [];
      this.totalPrice = 0;
      this.count = 0;
    },
    print() {
      console.log(`
      Товары: ${JSON.stringify(this.goods)}
      \n 
      Общая стоимость: ${this.totalPrice}`);
    },
  };
};

class Goods {
  constructor(name, price, discount) {
    this.name = name;
    this.price = price;
    this.discount = discount;
  };
};

class FoodGoods extends Goods {
  constructor(name, price, discount, calories) {
    super(name, price, discount);
    this.calories = calories;
  }
};

class ClothingGoods extends Goods{
  constructor(name, price, discount, material) {
    super(name, price, discount);
    this.material = material;
  }
};

class  TechnicsGoods extends Goods{
  constructor(name, price, discount, typeTechnic) {
    super(name, price, discount);
    this.typeTechnic = typeTechnic;
  }
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
cards.print();
