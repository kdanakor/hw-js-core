let dnaSide = 'ATTGC';

function getComplementarySide(str) {
  result = '';
  for(let i = 0; i < dnaSide.length; i++) {
    if(str[i] === 'A') {
      result += 'T';
    } else if(str[i] === 'T') {
      result += 'A';
    } else if(str[i] === 'C') {
      result += 'G';
    } else if(str[i] === 'G') {
      result += 'C';
    }
  }
  return result;
}

console.log(getComplementarySide(dnaSide));

test2 = 'GTAT';

console.log(getComplementarySide(test2));