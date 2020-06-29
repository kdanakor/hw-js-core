let pendrive = prompt ("Введіть обсяг флешки в Гб");
const value = 820;
pendrive = 1000 * pendrive / value;
alert ("На флешці поміститься " + pendrive.toFixed (0) + " файлів обсягом 820 Мб");


