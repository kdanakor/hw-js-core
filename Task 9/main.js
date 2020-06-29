const yournumber = prompt ("Введіть трьохзначне число");

let mainum = yournumber % 100;

let num1 = mainum % 10;
let num2 = (mainum - num1) / 10;
let num3 = (yournumber - mainum) / 100;

alert ("Ваше число " + num1 + num2 + num3);


