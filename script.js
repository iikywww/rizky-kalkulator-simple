function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        let expression = document.getElementById('display').value;

        // Mengubah simbol ^ menjadi ** untuk operasi pangkat
        expression = expression.replace(/\^/g, "**");

        // Menangani fungsi matematika
        expression = expression.replace(/sin\(/g, "Math.sin(");
        expression = expression.replace(/cos\(/g, "Math.cos(");
        expression = expression.replace(/tan\(/g, "Math.tan(");
        expression = expression.replace(/log\(/g, "Math.log10(");
        expression = expression.replace(/sqrt\(/g, "Math.sqrt(");

        let result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        alert('Kesalahan dalam perhitungan!');
        clearDisplay();
    }
}
