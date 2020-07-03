let money = prompt('Введіть суму в доларах (USD)');

const currency = prompt('Впишіть буквенний код валюти, на яку ви хочете обміняти долари', 'EUR або UAH або GBP');

const currencyEUR = money * 0.95;

const currencyUAH = money * 27.1801;

const currencyGBP = money * 0.8;

switch (currency) {
    case 'EUR' : {
        alert(currencyEUR + ' євро');
        break;
}

    case 'UAH' : {
        alert(currencyUAH.toFixed(2) + ' гривень');
        break;
    }

    case 'GBP' : {
        alert(currencyGBP + ' фунтів стерлінгів');
        break;
    }

    default : {
        alert('Впишіть буквенний код валюти у форматі EUR або UAH або GBP');
        break;
    }
}





