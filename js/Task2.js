'use strict';

const countIp = (arr) => {
	let count = 0;

	
  const filterArr = arr.filter((item, index) => arr.indexOf(item) === index);
  for(const key of filterArr) {
    count++
  }

	return count;
}

const listIPv4 = [
  "10.90.112.24",
  "10.53.161.190",

  "10.205.116.71",

  "10.71.83.95",
  "10.53.161.190",
  "10.106.136.132",
  "10.53.161.190",

  "10.248.129.60",
  "10.83.161.244",
  "10.54.99.35",
  "10.249.150.138",

  "10.246.92.188",
  "10.106.80.33",
  "10.171.137.197",
  "10.205.191.187",
  "10.201.184.28",
  "10.213.145.216",
  "10.74.3.33"
];

console.log(countIp(listIPv4));