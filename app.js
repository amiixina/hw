// ----------------------- 1 -----------------------------
/*const numbers = [1, 5, 8, 3, 12, 7, 9, 2, 4, 15, 6];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 3 && numbers[i] < 10) {
      console.log(numbers[i]);
    }
  }*/

  // ------------------------- 2 -----------------------------
  /*const numbers = [1, 2, 5, 9, 4, 13, 4, 10];

if (numbers.includes(4)) {
  console.log('Наявний!');
} else {
  console.log('Немає');
}*/

// ------------------------ 3 -----------------------------
/*const mass = [42, 2, 33, 11, 12, 10, 0];

const sum = mass.reduce((acc, currentValue) => {
  return acc + currentValue;
}, 0);

const average = sum / mass.length;

console.log(average);
*/
// -------------------------- 4 --------------------------
/*const animals = ["parrot", "bull", "bear", "monkey"];

const totalLength = animals.reduce((acc, currentValue) => {
  return acc + currentValue.length;
}, 0);

console.log(totalLength);*/

const mixedArray = ["parrot", 140, "bull", true, "bear", 47, "monkey"];

const onlyStrings = mixedArray.filter(element => {
  return typeof element === "string";
});

console.log(onlyStrings);