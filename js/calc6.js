let num = parseInt(prompt("Ingrese un número: "));

while (isNaN(num) || num <= 0) {
    num = parseInt(prompt("Ingrese un número válido: "));
}

if (num % 2 == 0) {
    console.log(num + " es par");
} else {
    console.log(num + " es impar");
}
