const fs = require('fs');

// ใช้งาน json.loads() หรือ json.parse()
let data = fs.readFileSync('./json-data.json');
let loadData = JSON.parse(data);

console.log("ข้อมูลที่อ่านจากไฟล์ JSON:", loadData);

// ใช้งาน json.dumps() หรือ json.stringify()
loadData.age = 21;
loadData.grade = "A+";

const newJsonData = JSON.stringify(loadData, null, 2);
fs.writeFileSync("json-data.json", newJsonData, "utf-8");

console.log("อัปเดตข้อมูลสำเร็จ:", loadData);