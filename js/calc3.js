let num1 = parseFloat(prompt("Ingrese el primer número: "));
let num2 = parseFloat(prompt("Ingrese el segundo número: "));

while (isNaN(num1) || num1 <= 0 || isNaN(num2) || num2 <= 0) {
    num1 = parseFloat(prompt("Ingrese el primer número: "));
    num2 = parseFloat(prompt("Ingrese el segundo número: "));
}

if (num1 > num2) {
    for (let i = num2; i <= num1; i++) {
        console.log(i);
    }
} else {
    for (let i = num1; i <= num2; i++) {
        console.log(i);
    }
}
