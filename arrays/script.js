let letra = ['a','b','c','d','e','f','g','h'];
let numero = [89,87,33,22,11,30,60,2,100]
// remove o 'h'
letra.pop();
// insere o 'i'
letra.push('i');
// remove o 'a'
letra.shift();
// insere o 'z'
letra.unshift('z');
// O primeiro argumentoindica a posição para adicionar/remover itens. O segundo argumento é opcional e indica a quantidade de itens a serem removidos. Caso seja 0, nenhum item será removido. Os demais argumentos são os elementos a serem adicionados.
letra.splice(2,2,'n','o');
// copia de uma parte de um array, item da posição final não e incluso.
let copia1 = letra.slice(0,4);
let copia2 = letra.slice(4,9);
// percorre o vetor printando os valores
letra.forEach((letras)=> console.log(letras));
console.log('=========');
// percorre o vetor copiado printando os valores
copia1.forEach((n)=> console.log(n));
console.log('=========');
copia2.forEach((m)=> console.log(m));
console.log('=========');
// concatenação de arrays
let juntando = copia1.concat(copia2).concat(' Juntou tudo');
console.log(juntando);
// every = true se todos os elementos satisfazer condição
// some = true se ao menos um elemento satisfazer a condição
let todos = numero.every(n => {
    return n > 50;
});
console.log(todos);
console.log('=========');
let soUm = numero.some(n => {
    return n > 50;
});
console.log(soUm);
console.log('=========');
// ordenando array
let ordenado = numero.sort();
console.log(ordenado);

// o método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
//const palavras = ['universidade', 'web', 'javascript', 'disciplina', 'aluno', 'nota'];
//const resultado = palavras.filter(palavra => palavra.length > 6);
//console.log(resultado); // [ 'universidade', 'javascript', 'disciplina' ]

// O método map() cria uma nova array composta dos resultados da execução da função passada como argumento em cada um dos elementos do array original.
// const array = [1, 4, 9, 16];
// const resultado = array.map(x => x * 2);
// console.log(resultado); // [ 2, 8, 18, 32 ]

//  o método reduce() executa uma função reducer (provida por você) para cada membro do array, resultando num único valor de retorno.
// const array = [1, 4, 9, 16];
// const resultado = array.reduce( (acumulado, valor) => acumulado + valor );
// console.log(resultado); // 30


console.log("testando o git...");

console.log("Teste 3....");

console.log("teste com branch...");

console.log("agora vai...");