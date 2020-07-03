let purchase = +prompt('Введіть суму вашої покупки');

let discount;

let payment = purchase - discount;

if (purchase >= 200 && purchase < 300) {
    alert(`Сума до оплати зі знижкою становить ${purchase - (purchase * 0,03)} грн`);
} else if (purchase >= 300 && purchase < 500) {
    alert(`Сума до оплати зі знижкою становить ${purchase - (purchase * 0,05)} грн`);
} else if (purchase >= 500) {
    alert(`Сума до оплати зі знижкою становить ${purchase - (purchase * 0,07)} грн`);
} else {
    alert(`Сума до оплати становить ${purchase}. Знижка не передбачена`);
}







