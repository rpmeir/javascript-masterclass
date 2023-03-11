
export function run(element) {
    console.log(10); // decimal
    console.log(9.9); // decimal
    console.log(0xFF); // hexadecimal
    console.log(0X1A); // hexadecimal
    console.log(0b11); // binario
    console.log(0o7); // octal

    console.log(new Number(10)); // decimal
    console.log(new Number(9.9)); // decimal
    console.log(new Number(0xFF)); // hexadecimal
    console.log(new Number(0X1A)); // hexadecimal
    console.log(new Number(0b11)); // binario
    console.log(new Number(0o7)); // octal

    console.log((123.4).toExponential(10));
    console.log((1234.5).toExponential(10));
    console.log((10).toFixed(2));
    console.log((123.4).toPrecision(10));

}
