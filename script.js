const vowels = ["a", "e", "i", "o", "u"];
//slice(start , end ) end index not include
// not change original array
const a = vowels.slice(2, 4);
console.log(a);
console.log(vowels);

//get last element
console.log(vowels.slice(-1));
console.log(vowels.slice(-2));
console.log(vowels.slice(1, -2));

const b = vowels.slice();
c = vowels;
vowels[1] = "g";
console.log(c);
console.log(vowels);
//deep copy array
console.log(b);

//splice methods
