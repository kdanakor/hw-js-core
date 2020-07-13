let number = prompt('Введіть двохзначне число');

const ones = ['один', 'два', 'три', 'чотири', 'п\'ять', 'шість', 'сім', 'вісім', 'дев\'ять'];
const tens = ['двадцять', 'тридцять', 'сорок', 'п\'ятдесят', 'шістдесят', 'сімдесят', 'вісімдесят', 'дев\'яносто'];
const teens = ['десять', 'одинадцять', 'дванадцять', 'тринадцять', 'чотирнадцять', 'п\'ятнадцять', 'шістнадцять', 'сімнадцять', 'вісімнадцять', 'дев\'ятнадцять']; 

function convertNumberToWord(number) {
    if(number > 0 && number <=9) {
      return ones[number - 1];
    } 
    if(number >= 10 && number < 20 ) {
      return teens[number - 10]; 
    }
    if(number >= 20 && number < 99) {
      let str = number;
      str = str.split('');
      let firstNumber = str[0];
      let secondNumber = str[1];
      return `${tens[firstNumber - 2]} ${ones[secondNumber - 1]}`;
    }
}

alert(convertNumberToWord(number));