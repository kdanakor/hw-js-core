let userAge = prompt('Вкажіть свій вік');

if (userAge >=0 && userAge <12) {
    alert('Ви дитина');
} else if (userAge >=12 && userAge <18) {
    alert('Ви підліток');
} else if (userAge >=18 && userAge <60) {
    alert('Ви дорослий!');
} else if (userAge >= 60) {
    alert('Ви пенсіонер');
} else {
    alert('Переконайтесь, що ви вірно вказали свій вік');
} 