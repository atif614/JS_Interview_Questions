//Count the number of vowels and consonants.


let myName = "My name is Atif Raza";

let vowel = /[aeiou]/gi;
console.log(myName.match(vowel).length);

let consonant = /[^aeiou\s]/gi;
console.log(myName.match(consonant));