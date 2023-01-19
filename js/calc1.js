let num1 = parseFloat(prompt("Ingrese el primer número: "));
let num2 = parseFloat(prompt("Ingrese el segundo número: "));

while (isNaN(num1) || num1 <= 0 || isNaN(num2) || num2 <= 0) {
    num1 = parseFloat(prompt("Ingrese el primer número: "));
    num2 = parseFloat(prompt("Ingrese el segundo número: "));
}

if (num1 > num2) {
    console.log(num1 + " es mayor que " + num2);
} else if (num1 < num2) {
    console.log(num1 + " es menor que " + num2);
} else {
    console.log(num1 + " es igual a " + num2);
}
