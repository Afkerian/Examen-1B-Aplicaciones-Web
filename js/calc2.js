let num = parseFloat(prompt("Ingrese un número: "));
let sum = 0;
let count = 0;

while (num >= 0) {
    sum += num;
    count++;
    num = parseFloat(prompt("Ingrese otro número: "));
}

console.log("La suma es: " + sum);
console.log("La media es: " + sum/count);
