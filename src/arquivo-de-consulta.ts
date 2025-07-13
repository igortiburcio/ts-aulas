// Como declarar variáveis
// Em TypeScript, existem 3 maneiras de declarar variáveis:
// 1. var
// 2. let
// 3. const

var nome = "John";
let idade = 30;
const genero = "Masculino";


//A diferença entre var e let é que var é uma variável global e let é uma variável local.
//A diferença entre let e const é que let pode ser reatribuído e const não. CONST é uma variável constante e imutável.
// Não vale a pena usar var, pois ele é uma variável global e pode ser acessada em qualquer lugar do código. Sempre use let ou const.

// Para declarar funções, existem 2 maneiras:
// 1. function
// 2. arrow function

// Função normal, mais parecida com a sintaxe de outras linguagens
function soma(a: number, b: number): number {
    return a + b;
}

// Arrow function, mais moderna e funcional.
// Explicando a sintaxe: (parametros): tipoRetorno => retorno

// Exemplo 1
const somaArrow = (a: number, b: number): number => a + b;

// Exemplo 2
const somaArrow2 = (a: number, b: number): number => {
    return a + b;
};

// Existem algumas formas de loops.
// 1. for

for (let i = 0; i < 10; i++) {
    console.log(i);
}

// 2. while

let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

// 3. do while

let j = 0;
do {
    console.log(j);
    j++;
} while (j < 10);


// Existem formas especificar para loops em arrays.
// 1. for of
// O for of é um loop que percorre cada item de um array.
// Explicando a sintaxe: const item of array
// item é o nome que você deseja dar ao item do array.
// array é o array que você deseja percorrer.
// Exemplo:

const forOfArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const item of forOfArr) {
    console.log(item);
}

// 2. for in
// O for in é um loop que percorre cada propriedade de um objeto.
// Explicando a sintaxe: const propriedade in objeto
// propriedade é o nome que você deseja dar à propriedade do objeto.
// objeto é o objeto que você deseja percorrer.
// Exemplo:

// Como isso é bem especifico para TypeScript, falaremos mais sobre isso mais tarde.

const forInObj = {
    nome: "John",
    idade: 30,
    genero: "Masculino"
};

for (const propriedade in forInObj) {
    console.log(propriedade);
}

// O console é uma classe que representa o console/terminal.
// Ele possui métodos para mostrar mensagens no console/terminal.
// Exemplo:
console.log("Hello World");

// O console tem varios metodos para mostrar mensagens no console/terminal.
// Exemplo:
console.log("Hello World");
console.error("Hello World");
console.warn("Hello World");
console.info("Hello World");

// O que é um objeto?
// Um objeto é um tipo de dado que possui propriedades e metodos. Métodos são funções que pertencem ao objeto.
// Objetos são criados primariamente por meio de classes.
// Exemplo:

class Pessoa {
    nome: string;
    idade: number;
    genero: string;

    constructor(nome: string, idade: number, genero: string) {
        this.nome = nome;
        this.idade = idade;
        this.genero = genero;
    }

    processar() {
        return {
            nome: this.nome,
            idade: this.idade,
            genero: this.genero,
        };
    }
}

const pessoa = new Pessoa("John", 30, "Masculino");
console.log(pessoa.processar());

// Existem outras formas de criar objetos, chamamos isso de object literals.
// Exemplo:

const pessoa2 = {
    nome: "John",
    idade: 30,
    genero: "Masculino",
    
    processar() {
        return {
            nome: this.nome,
            idade: this.idade,
            genero: this.genero,
        };
    }
};

console.log(pessoa2.processar());

