let firstNumber;
let secondNumber;
let randomActionNumber;

function generateRandomEquasion() {
  const mathEqausionDomElement = document.querySelector('#math-equasion');
  randomActionNumber = Math.ceil(Math.random() * 4);

  switch(randomActionNumber) {
    case 1 : {
        firstNumber = Math.ceil(Math.random() * 100);
        secondNumber = Math.ceil(Math.random() * 100);
        mathEqausionDomElement.innerHTML = `${firstNumber} + ${secondNumber} = `;
    break;
    }

    case 2 : {
        firstNumber = Math.ceil(Math.random() * 100);
        secondNumber = Math.ceil(Math.random() * 100);
        mathEqausionDomElement.innerHTML = `${firstNumber} - ${secondNumber} = `;
    break;
    }

    case 3 : {
        firstNumber = Math.ceil(Math.random() * 30);
        secondNumber = Math.ceil(Math.random() * 30);
        mathEqausionDomElement.innerHTML = `${firstNumber} * ${secondNumber} = `;
    break;
    }

    case 4 : {
        firstNumber = Math.ceil(Math.random() * 30);
        secondNumber = Math.ceil(Math.random() * 30);
        mathEqausionDomElement.innerHTML = `${firstNumber} / ${secondNumber} = `;
    break;
    }
  }
}

function checkMathEquasion() {
  const mathInputElement = document.querySelector('#math-equasion-answer');

  switch(randomActionNumber) {
    case 1 : {
    if (mathInputElement.value == firstNumber + secondNumber) {
      alert('Все правильно');
      generateRandomEquasion();
    } else {
      alert('Подумайте, ще!');
    }
    mathInputElement.value = '';
    break;
    }

    case 2 : {
    if (mathInputElement.value == firstNumber - secondNumber) {
      alert('Все правильно');
      generateRandomEquasion();
      mathInputElement.value = ''
    } else {
      alert('Подумайте, ще!');
    }
    mathInputElement.value = '';
    break;
    }

    case 3 : {
    if (mathInputElement.value == firstNumber * secondNumber) {
      alert('Все правильно');
      generateRandomEquasion();
    } else {
      alert('Подумайте, ще!');
    }
    mathInputElement.value = '';
    break;
    }

    case 4 : {
    if (mathInputElement.value == firstNumber / secondNumber) {
      alert('Все правильно');
      generateRandomEquasion();
    } else {
      alert('Подумайте, ще!');
    }
    mathInputElement.value = '';
    break;
    }  
  }
}

generateRandomEquasion();