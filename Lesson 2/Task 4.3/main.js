const yourNumber = +prompt ("Введіть трьохзначне число");

let mainNum = yourNumber % 100;

let num1 = mainNum % 10;
let num2 = (mainNum - num1) / 10;
let num3 = (yourNumber - mainNum) / 100;

if (num1 !== num2 && num1 !== num3 && num2 !== num3) {
    alert('У вашому числі немає однакових цифр');
} else {
    alert('У вашому числі є однакові цифри');
}


