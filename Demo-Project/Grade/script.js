function calculateGPA() {
    // รับคะแนนจาก input
    const csi101 = parseFloat(document.getElementById('csi101').value);
    const csi102 = parseFloat(document.getElementById('csi102').value);
    const csi203 = parseFloat(document.getElementById('csi203').value);
    const csi204 = parseFloat(document.getElementById('csi204').value);
    const csi305 = parseFloat(document.getElementById('csi305').value);

    // แปลงคะแนนเป็นเกรด (A, B, C, D, F)
    const grades = [csi101, csi102, csi203, csi204, csi305].map(score => {
        if (score >= 80) return 4.0; // A
        if (score >= 70) return 3.0; // B
        if (score >= 60) return 2.0; // C
        if (score >= 50) return 1.0; // D
        return 0.0; // F
    });

    // คำนวณ GPA
    const totalCredits = 15; // 3 หน่วยกิต * 5 วิชา
    const totalGradePoints = grades.reduce((sum, grade) => sum + grade, 0);
    const gpa = totalGradePoints / 5;

    // แสดงผล GPA
    document.getElementById('result').textContent = `Your GPA is: ${gpa.toFixed(2)}`;
}