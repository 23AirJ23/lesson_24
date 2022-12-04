"use strict"

// Функції

let showMessage;

if (2 > 1) {
   showMessage = function () {
      console.log('Повідомлення');
   }
}
showMessage()

// Масиви

// Задача 2

let users = ['Ваня', 'Иштван',];
console.log(users);
// Додаємо в кінець
users.push('Оля');
console.log(users);

let usersTwo = ['Ваня', 'Иштван', 'Оля'];
// Заміняємо 
usersTwo.splice(1, 1, 'Петя')
console.log(usersTwo);
// Видаляємо перший єлемент та переносимо в окрему змінну
let show = usersTwo.shift();
console.log(show);
// Вставляємо на початок
usersTwo.unshift('Маша', 'Паша');
console.log(usersTwo);

// Задача 3

let arr = ['Ваня', 'Иштван', 'Оля',];
let cut = arr.splice(1, 1);
console.log(cut);

// Задача 4

let str = "Ваня, Иштван, Оля";
let newArr = str.split(',');
console.log(newArr);

// DOM

// 1 задача

let someEelement = document.querySelector('div');
console.log(someEelement.dataset.sayHi);

// 2 задача

let list = document.querySelectorAll('li');
console.log(list[1].textContent);

// 3 задача

let someDiv = document.querySelectorAll('.like');
console.log(someDiv);

// Прокрутка та координати

// Задача 1

let somePage = document.documentElement;
let scrollWidth = somePage.offsetWidth - somePage.clientWidth;
console.log(scrollWidth);

// Задача 2

setTimeout(function () {
   window.scrollTo(0, 100)
}, 1000);

// Задача 3

let itemOne = document.querySelector('p');
let coordinateTopOne = itemOne.getBoundingClientRect().top;
let coordinateLeftOne = itemOne.getBoundingClientRect().left;
let coordinateOne = `Top:${coordinateTopOne}, Left:${coordinateLeftOne}`;
console.log(coordinateOne);
let itemTwo = document.querySelector('div');
let coordinateTopTwo = itemTwo.getBoundingClientRect().top;
let coordinateLeftTwo = itemTwo.getBoundingClientRect().left;
let coordinateTwo = `Top:${coordinateTopTwo}, Left:${coordinateLeftTwo}`;
console.log(coordinateTwo);
let itemThree = document.querySelector('ul');
let coordinateTopThree = itemThree.getBoundingClientRect().top;
let coordinateLeftThree = itemThree.getBoundingClientRect().left;
let coordinateThree = `Top:${coordinateTopThree}, Left:${coordinateLeftThree}`;
console.log(coordinateThree);