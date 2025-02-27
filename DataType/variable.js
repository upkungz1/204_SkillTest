// สร้างตัวแปรและแสดงผล
let name = "John Doe"; // String
let age = 30; // Integer
let isStudent = true; // Boolean

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);

// การแปลงชนิดข้อมูล
let numStr = "10";
let numInt = parseInt(numStr); // แปลง String เป็น Integer

let piStr = "3.14";
let piFloat = parseFloat(piStr); // แปลง String เป็น Float

let num = 100;
let numStr2 = num.toString(); // แปลง Integer เป็น String

console.log("numInt:", numInt);
console.log("piFloat:", piFloat);
console.log("numStr2:", numStr2);

//การใช้งาน typeOf เพื่อแสดงชนิดข้อมูล
console.log("Type of name:", typeof name);
console.log("Type of age:", typeof age);
console.log("Type of isStudent:", typeof isStudent);
console.log("Type of numInt:", typeof numInt);
console.log("Type of piFloat:", typeof piFloat);
console.log("Type of numStr2:", typeof numStr2);

//การแปลงชนิดข้อมูลที่เป็นค่า boolean
let stringTrue = "true";
let stringFalse = "false";
let booleanTrue = Boolean(stringTrue);
let booleanFalse = Boolean(stringFalse);

console.log("booleanTrue:", booleanTrue);
console.log("booleanFalse:", booleanFalse);
console.log("Type of booleanTrue:", typeof booleanTrue);
console.log("Type of booleanFalse:", typeof booleanFalse);

//ลองการแปลงค่าที่ไม่ได้เป็นตัวเลข
let notANumber = parseInt("hello");
console.log("notANumber:", notANumber); // ผลลัพธ์จะเป็น NaN (Not a Number)

//การแปลงค่า null และ undefined
let nullValue = null;
let undefinedValue = undefined;

console.log("แปลง null เป็น number:", Number(nullValue)); // ผลลัพธ์คือ 0
console.log("แปลง undefined เป็น number:", Number(undefinedValue)); // ผลลัพธ์คือ NaN