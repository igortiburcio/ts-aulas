const frutas: {nome: string, preco: number}[] = [
    {nome: "banana", preco: 1}, 
    {nome: "maçã", preco: 2}, 
    {nome: "laranja", preco: 3}, 
    {nome: "uva", preco: 4}, 
    {nome: "manga", preco: 5}, 
    {nome: "mamão", preco: 6}, 
    {nome: "morango", preco: 7}, 
    {nome: "melancia", preco: 8}
];

const reduced = frutas.reduce((acc, curr) => {
    return {...acc, ...curr};
}, {});

console.log(reduced);

console.log(frutas.length);

frutas.pop();

console.log(frutas.length);

frutas.push({nome: "melancia", preco: 8});

console.log(frutas.length);

frutas.shift();

console.log(frutas.findIndex((item) => item.nome === "maçã"));

const spliced = frutas.splice(2, 2);

console.log(spliced);
console.log(frutas);

const sliced = frutas.slice(2, 4);

console.log(sliced);
console.log(frutas);

const str = "banana";

console.log(str.slice(2, 4));
console.log(str.length);

const arrToFlat: number[][] = [
    [1, 2], 
    [3, 4], 
    [5, 6]
];

console.log(arrToFlat.flat());
