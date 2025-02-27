// JavaScript Functions (จากที่เขียนไว้ก่อนหน้า)
function calculateCircleArea(radius) {
  const PI = 3.14159;
  return PI * radius * radius;
}

function categorizeAge(age) {
  if (age <= 13) return "เด็ก";
  else if (age <= 20) return "วัยรุ่น";
  else return "ผู้ใหญ่";
}

function checkEvenOrOdd(number) {
  return number % 2 === 0 ? "เลขคู่" : "เลขคี่";
}

function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
          if (arr[j] > arr[j + 1]) {
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
          }
      }
  }
  return arr;
}

function factorial(n) {
  if (n === 0) return 1;
  else return n * factorial(n - 1);
}

function fibonacci(n) {
  if (n <= 1) return n;
  else return fibonacci(n - 1) + fibonacci(n - 2);
}

// Basic Algorithm
function calculateAndDisplayCircleArea() {
  try {
      const radius = parseFloat(document.getElementById("circleRadius").value);
      if (isNaN(radius)) {
          throw new Error("กรุณาใส่รัศมีเป็นตัวเลข");
      }
      alert("พื้นที่วงกลม: " + calculateCircleArea(radius));
  } catch (error) {
      console.error("เกิดข้อผิดพลาด:", error);
      alert(error.message);
  }
}

// Conditional Algorithm
function checkAndDisplayAgeCategory() {
  try {
      const age = parseInt(document.getElementById("userAge").value);
      if (isNaN(age)) {
          throw new Error("กรุณาใส่อายุเป็นตัวเลข");
      }
      alert("คุณเป็น: " + categorizeAge(age));
  } catch (error) {
      console.error("เกิดข้อผิดพลาด:", error);
      alert(error.message);
  }
}

function checkAndDisplayEvenOdd() {
  try {
      const number = parseInt(document.getElementById("inputNumber").value);
      if (isNaN(number)) {
          throw new Error("กรุณาใส่ตัวเลข");
      }
      alert(number + " เป็น " + checkEvenOrOdd(number));
  } catch (error) {
      console.error("เกิดข้อผิดพลาด:", error);
      alert(error.message);
  }
}

// Loop Algorithm
function displayForLoop() {
  try {
      let result = "";
      for (let i = 1; i <= 10; i++) {
          result += i + " ";
      }
      alert(result);
  } catch (error) {
      console.error("เกิดข้อผิดพลาด:", error);
      alert("เกิดข้อผิดพลาดในการแสดง For Loop");
  }
}

function startWhileLoop() {
  try {
      let input = "";
      let result = "";
      while (input !== "exit") {
          input = prompt("กรุณาใส่ข้อความ (พิมพ์ 'exit' เพื่อออก):");
          if (input !== "exit" && input !== null) {
              result += input + " ";
          }
      }
      alert(result);
  } catch (error) {
      console.error("เกิดข้อผิดพลาด:", error);
      alert("เกิดข้อผิดพลาดในการแสดง While Loop");
  }
}

// Sorting Algorithm
function sortAndDisplayArray() {
  try {
      const randomArray = Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000));
      const sortedArray = bubbleSort(randomArray);
      alert("Array ที่เรียงแล้ว: " + sortedArray.join(", "));
  } catch (error) {
      console.error("เกิดข้อผิดพลาด:", error);
      alert("เกิดข้อผิดพลาดในการเรียงลำดับ Array");
  }
}

// Recursive Algorithm
function calculateAndDisplayFactorial() {
  try {
      const num = parseInt(document.getElementById("factorialNumber").value);
      if (isNaN(num)) {
          throw new Error("กรุณาใส่ตัวเลข");
      }
      alert(num + " factorial คือ " + factorial(num));
  } catch (error) {
      console.error("เกิดข้อผิดพลาด:", error);
      alert(error.message);
  }
}

function calculateAndDisplayFibonacci() {
  try {
      const fiboNum = parseInt(document.getElementById("fibonacciNumber").value);
      if (isNaN(fiboNum)) {
          throw new Error("กรุณาใส่ตัวเลข");
      }
      alert("ลำดับ Fibonacci ที่ " + fiboNum + " คือ " + fibonacci(fiboNum));
  } catch (error) {
      console.error("เกิดข้อผิดพลาด:", error);
      alert(error.message);
  }
}