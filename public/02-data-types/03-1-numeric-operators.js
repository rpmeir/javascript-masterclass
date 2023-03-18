
export function run(element) {
    // aritmeticos
    console.log('2 + 2 : ', 2 + 2);
    console.log('8 - 3 : ', 8 - 3);
    console.log(8 * 3);
    console.log(8 / 3);
    console.log(8 % 3);


    // atribuicao
    console.log('');
    let result = 10;
    console.log((result += 2));
    console.log((result -= 5));
    console.log((result *= 8));
    console.log((result /= 2));
    console.log((result %= 6));

    // incremento e decremento
    console.log('');
    let result_b = 10;
    console.log(result_b++);
    console.log(++result_b);
    console.log(result_b--);
    console.log(--result_b);

    // operadores binarios
    console.log('');
    console.log('Or: 4 | 3 => ', 4 | 3);
    console.log((4).toString(2).padStart(32,0));
    console.log((3).toString(2).padStart(32,0));
    console.log(('').padStart(32,'-'));
    console.log((7).toString(2).padStart(32,0));
    
    console.log('');
    console.log('And: 3 & 1 => ', 3 & 1);
    console.log((3).toString(2).padStart(32,0));
    console.log((1).toString(2).padStart(32,0));
    console.log(('').padStart(32,'-'));
    console.log((1).toString(2).padStart(32,0));
    
    console.log('');
    console.log('Xor: 5 ^ 2 => ', 5 ^ 2);
    console.log((5).toString(2).padStart(32,0));
    console.log((2).toString(2).padStart(32,0));
    console.log(('').padStart(32,'-'));
    console.log((7).toString(2).padStart(32,0));
    
    console.log('');
    console.log('Not: ~2 => ', ~2);
    console.log((2).toString(2).padStart(32,0));
    console.log(('').padStart(32,'-'));
    console.log((-3 >>> 0).toString(2).padStart(32,0));
    
    console.log('');
    console.log('Rotacao de bits para esquerda : 4 << 2 ', 4 << 2);
    console.log((4).toString(2).padStart(32,0));
    console.log((8).toString(2).padStart(32,0));
    console.log(('').padStart(32,'-'));
    
    console.log('');
    console.log('Rotacao de bits para direita : 128 >> 1 ', 128 >> 1);
    console.log((128).toString(2).padStart(32,0));
    console.log((64).toString(2).padStart(32,0));
    
    console.log('');
    console.log('Rotacao de bits que desloca o sinal : -2 >>> 1 ', -2 >>> 1);
    console.log((-2 >>> 0).toString(2).padStart(32,0));
    console.log((2147483647).toString(2).padStart(32,0));
}
