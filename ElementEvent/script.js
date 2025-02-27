
// เปลี่ยนสีพื้นหลัง
const changeColorBtn = document.getElementById("changeColorBtn");
let isBackgroundColorChanged = false;

changeColorBtn.addEventListener("click", function() {
    if (isBackgroundColorChanged) {
        document.body.style.backgroundColor = "white";
        isBackgroundColorChanged = false;
    } else {
        document.body.style.backgroundColor = "lightblue";
        isBackgroundColorChanged = true;
    }
});

// แสดงข้อความเมื่อคลิกปุ่ม
function showMessage() {
            alert("ปุ่มถูกคลิก!");
        }


// ตรวจสอบอีเมล
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // ป้องกันการส่งฟอร์มแบบดั้งเดิม
    let email = document.getElementById("email").value;
    if (email.includes("@") && email.includes(".com")) {
        alert("อีเมลถูกต้อง");
    } else {
        alert("อีเมลไม่ถูกต้อง");
    }
});

//event onmouseover และ onkeyup
document.querySelector(".hover-me").addEventListener("mouseover",function(){
    console.log("Mouse Over!");
});

document.querySelector(".key-up-input").addEventListener("keyup",function(){
    console.log("Key Up!");
});