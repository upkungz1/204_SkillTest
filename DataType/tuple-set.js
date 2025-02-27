// JavaScript ไม่มี Tuple แต่สามารถใช้ Array แทนได้
let tuple = [1, 2, 3];

let numbers = [1, 1, 1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers);