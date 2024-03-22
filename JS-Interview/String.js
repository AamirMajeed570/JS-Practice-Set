// Reverse A String 
const a = "This is Javascript Code";
const reversedWords = a.split(' ').map(word => word.split('').reverse().join('')).join(' ');
console.log(reversedWords);