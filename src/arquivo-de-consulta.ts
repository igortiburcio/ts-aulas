// =============================
// Tipos Primitivos em TypeScript
// =============================
// TypeScript possui vários tipos primitivos:
// string: texto
let texto: string = "Olá, mundo!";
// number: números inteiros ou decimais
let numero: number = 42;
// boolean: verdadeiro ou falso
let verdadeiro: boolean = true;
// null: valor nulo (ausência de valor)
let nulo: null = null;
// undefined: valor indefinido (não inicializado)
let indefinido: undefined = undefined;
// any: pode ser qualquer tipo (evite usar, pois perde a segurança do TypeScript)
let qualquerValor: any = "pode ser qualquer coisa";
qualquerValor = 10;
// unknown: tipo desconhecido, precisa ser checado antes de usar
let valorDesconhecido: unknown = "algo";
// Exemplo de checagem:
if (typeof valorDesconhecido === "string") {
    console.log(valorDesconhecido.toUpperCase());
}

// =============================
// Como declarar variáveis
// =============================
// Em TypeScript, existem 3 maneiras de declarar variáveis:
// 1. var
// 2. let
// 3. const

var nome = "John";
let idade = 30;
const genero = "Masculino";


// O typescript tem tipagem forte, ou seja, ele sabe o tipo de cada variável.
// Isso ajuda a prevenir erros de tipagem.
// O typescript infere o tipo de uma variável, ou seja, ele sabe o tipo de uma variável sem precisar declarar o tipo.
// Exemplo:
let nome2 = "John";
console.log(typeof nome2); // string

// Entretanto você pode declarar o tipo de uma variável explicitamente.
// Para fazer isso, basta usar o nome da variável seguido de dois pontos e o tipo.
// Exemplo:

let nome3: string = "John";
console.log(typeof nome3); // string

//A diferença entre var e let é que var é uma variável global e let é uma variável local.
//A diferença entre let e const é que let pode ser reatribuído e const não. CONST é uma variável constante e imutável.
// Não vale a pena usar var, pois ele é uma variável global e pode ser acessada em qualquer lugar do código. Sempre use let ou const.

// Para declarar funções, existem 2 maneiras:
// 1. function
// 2. arrow function

// =============================
// Funções em TypeScript
// =============================

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

// =============================
// Loops em TypeScript
// =============================

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


// =============================
// Loops em arrays em TypeScript
// =============================

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

// =============================
// Tipos (type) e Interfaces (interface) em TypeScript
// =============================

/*
Diferença entre type e interface em TypeScript:

interface:
- Usada principalmente para descrever a estrutura de objetos (como um contrato para objetos, classes e funções).
- Permite herança (uma interface pode estender outra interface).
- Pode ser implementada por classes.
- Pode ser "mesclada": se você declarar a mesma interface duas vezes, o TypeScript junta as propriedades automaticamente.
- Ideal para contratos de objetos e programação orientada a objetos (OOP).

Exemplo:
interface Pessoa {
  nome: string;
  idade: number;
}

---

type:
- Usado para criar um "apelido" (alias) para qualquer tipo: objetos, tipos primitivos, uniões, interseções, tuplas, etc.
- Não pode ser implementado por classes.
- Não pode ser mesclado (se declarar o mesmo type duas vezes, dá erro).
- Mais flexível para criar tipos complexos (uniões, interseções, tipos primitivos, etc).

Exemplo:
type Animal = {
  nome: string;
  especie: string;
}
type ID = string | number; // união de tipos

---
Resumo prático:
- Use interface para descrever objetos e contratos em OOP.
- Use type para criar aliases de tipos, uniões, interseções ou quando precisar de mais flexibilidade.
- Para objetos simples, ambos funcionam quase igual!
*/

// Interface: define a estrutura de um objeto, muito usada para contratos e orientação a objetos.
interface Animal {
    nome: string;
    idade: number;
    emitirSom(): void;
}

const cachorro: Animal = {
    nome: "Rex",
    idade: 5,
    emitirSom() {
        console.log("Au au!");
    }
};
cachorro.emitirSom();

// Type: pode ser usado para criar aliases de tipos, inclusive tipos primitivos, uniões, interseções, etc.
type PessoaType = {
    nome: string;
    idade: number;
    genero: string;
};

const pessoaType: PessoaType = {
    nome: "Maria",
    idade: 28,
    genero: "Feminino"
};

// Type também pode ser usado para criar tipos mais complexos
// Exemplo: união de tipos

type Status = "ativo" | "inativo";
let statusUsuario: Status = "ativo";

// Diferenças principais:
// - interface é mais usada para objetos e pode ser extendida/implementada (herança, OOP).
// - type é mais flexível, pode criar aliases para qualquer tipo, não só objetos.
// - Em muitos casos práticos, ambos funcionam de forma parecida para objetos.
// - Para tipos primitivos, uniões e interseções, use type.
// - Para contratos de objetos e OOP, prefira interface.

