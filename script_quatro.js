function saudacao(nome) {
console.log(`bom dia ${nome}`);
return 123456;
}
const variavel = saudacao(`luiz`);
console.log(variavel);

function soma (x, y) {
    const resultado = x + y;
    return resultado;
}
console.log(soma(2, 2));

const raiz = function (n) {
    return n ** 0.5;
};
console.log(raiz(9));