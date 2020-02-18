//1 max digit
    function getMaxDigit(number){
    return Math.max(...number.toString().split(''));
}
//2 pow
function calcPow(numb, exp){
	let result = 1;
	 for (let i = 1; i < exp; i++) {
        result *= numb;
    }
    return result;
}
//3 first letter
function firstLetter(name){
    return name[0].toUpperCase() + name.slice(1).toLowerCase();
}
//4 Tax
function getTaxes(salary){
	const tax = 19.5;
	const freeTax = salary - (salary*tax/100);
    return freeTax;
}
//5 Random Number
function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}
//6 countLetter
function countLetter(letter, word) {
    let result = 0;
    word.toLowerCase().split('').forEach(a => {
        if(a === letter) {
            result++;
        }
    });
    return result;
}
//7 Сurrency Сonverter
function convertCurrency (money) {
   let convert;
   if (money.substring(money.length - 3).toLowerCase() === 'uah'){
      convert = (parseInt(money) / 25) + "$";
   } else if (money.includes('$')){
      convert = (parseInt(money) * 25) + "UAH";
   }else{
      throw new Error('Incorrect data');
   }
   return convert;
}
//8 RandomPassword
function getRandomPassword(passwordLength){
  passwordLength = typeof passwordLength !== 'undefined' ?  passwordLength : 8;
return Array.from(new Array(passwordLength), () => getRandomNumber(0,9)).join('');
}
//9 DeleteLetters
function deleteLetters(letter,str){
	return str.toLowerCase().split('').filter(item => item !== letter).join('');
}
//10 Palyndrom
function isPalyndrom(str) {
const variable = str.toLowerCase();
return variable === variable.split('').reverse().join('');
}
//11 DeleteDuplicateLetter
function deleteDuplicateLetter(sentence){
sentence = sentence.toLowerCase();
let deleted = '';
for (let i = 0; i < sentence.length; i++) {
        if (sentence.indexOf(sentence[i]) === sentence.lastIndexOf(sentence[i])) {
          deleted += sentence[i];
        }
     }
   return deleted;
}
//Вивод
 document.writeln(`<p>Function #1 - ${getMaxDigit(9681)}</p>`);
 document.writeln(`<p>Function #2 - ${calcPow(2,5)}</p>`);
 document.writeln(`<p> Function #3 - ${firstLetter('mISHA')}</p>`);
 document.writeln(`<p> Function #4 - ${getTaxes(1000)}</p>`);
 document.writeln(`<p> Function #5 - ${getRandomNumber(1, 10)}</p>`);
 document.writeln(`<p> Function #6 - ${countLetter('a', 'Astalavista')}</p>`);
 document.writeln(`<p> Function #7 - ${convertCurrency('2500uah')}</p>`);
 document.writeln(`<p> Function #8 - ${getRandomPassword(8)}</p>`);
 document.writeln(`<p> Function #9 - ${deleteLetters('a', 'blablabla')}</p>`);
 document.writeln(`<p> Function #10 - ${isPalyndrom('madam')}</p>`);
 document.writeln(`<p> Function #11 - ${deleteDuplicateLetter('Бисквит был очень нежный')}</p>`);
