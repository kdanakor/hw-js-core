let money = prompt ("Введіть наявну суму у вашому гаманці");
let chocolade = prompt ("Введіть вартість шоколадки");
let buy = money / chocolade;
let cash = money % chocolade;
alert ("Ви купите " + buy.toFixed (0) + " шоколадок і отримаєте здачу у розмірі " + cash + " грн");


