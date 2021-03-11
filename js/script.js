/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате:
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Один из последних просмотренных фильмов?", ""),
  b = prompt("На сколько оцените его?", ""),
  c = prompt("Один из последних просмотренных фильмов?", ""),
  d = prompt("На сколько оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

//Условия
let number = 50;
if (number < 49) {
  console.log("Error");
} else if (number > 100) {
  cosole.log("Error1");
} else {
  console.log("Ok");
}
//тирнарный оператор
number == 50 ? console.log("Ok") : console.log("Error");

let number1 = 500;
switch (number1) {
  case 49:
    cosole.log("Неверно");
    break;
  case 51:
    console.log("Опять неверно");
    break;
  case 50:
    console.log("В точку!!!");
    break;
  default:
    console.log("Нет такого значения");
    break;
}

//Циклы
let num = 50;
while (num < 55) {
  console.log(num);
  num++;
}

//2
let num2 = 50;
do {
  console.log(num2);
  num2++;
} while (num2 < 55);
//3
let num3 = 50;
for (i = 1; i < 5; i++) {
  console.log(num3);
  num3++;
}

/*
new Promise((resolve, reject) => reject())
        .then(() => { throw new Error(2) })
        .catch(() => 1)
        .then((a) => console.log(a))
*/
