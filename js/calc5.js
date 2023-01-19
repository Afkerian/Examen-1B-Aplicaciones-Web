let num = parseInt(prompt("Ingrese un número: "));
while (isNaN(num) || num <= 0) {
    num = parseInt(prompt("Ingrese un número válido: "));
}

console.log("Los divisores de " + num + " son:");
for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
        console.log(i);
    }
}
