const vowels = ["a", "e", "i", "o", "u"];
//slice(start , end ) end index not include
// not change original array
console.log("slice");
const a = vowels.slice(2, 4);
console.log(a);
console.log(vowels);

//get last element : in array wraped
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

//splice methods: change the original array
// splice (start , delete count )
console.log("splice");
const arr = ["a", "b", "c", "d", "e"];

console.log(arr.splice(2, 1));
console.log(arr);
// remove last element from array
arr.splice(-1);
console.log(arr);

//reverse : - changes original array
console.log("Original Array");
const arr2 = ["a", "b", "c", "d", "e"];
const arr3 = arr2.reverse();
console.log(arr2);
console.log(arr3);

//concat : not change original array
console.log("concat");
const arr4 = vowels.concat(arr2);
console.log(arr4);
console.log(vowels);
console.log(arr2);

//join : convert array to string : not change original array
console.log("join");
const arr5 = vowels.join("-");
console.log(vowels);
console.log(arr5);

//at method : not change original array
console.log("at");
const arr6 = [12, 23, 34, 45, 56];
console.log(arr6[1]);
console.log(arr6.at(1));
//get last element
console.log(arr6.at(-1));
//using slice
console.log(...arr6.slice(-1));
console.log(arr6.slice(-1)[0]);

//at also work with string
const myname = "goutam";
console.log(myname.at(-1));
console.log(myname);

//for each method

console.log("for of loop");
const movements = [120, 230, -456, 85, -78, 96];
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`MOVEMENT ${i + 1} : deposite ${movement}`);
  } else {
    console.log(`MOVEMENT ${i + 1} : withdrowal ${Math.abs(movement)}`);
  }
}

movements.forEach((val, i, arr) => {
  if (val > 0) {
    console.log(`deposite ${val}`);
  } else {
    console.log(`withdrowal ${Math.abs(val)}`);
  }
});

//
