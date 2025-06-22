
function add(number1, number2) {
    return number1 + number2;
}

function divide(number1, number2) {
    return number2 !== 0 ? number1 / number2 : 'Error: Division by zero';
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

document.querySelectorAll('.operation').forEach(button => {
    button.addEventListener('click', function () {
        
        const number1 = parseFloat(document.getElementById('num1').value.trim()) || 0;
        const number2 = parseFloat(document.getElementById('num2').value.trim()) || 0;

        let results;
        switch (this.id) {
            case 'add':
                results = add(number1, number2);
                break;
            case 'divide':
                results = divide(number1, number2);
                break;
            case 'subtract':
                results = subtract(number1, number2);
                break;
            case 'multiply':
                results = multiply(number1, number2);
                break;
            default:
                results = 'Invalid operation';
        }

        document.getElementById('result').textContent = results;
    });
});