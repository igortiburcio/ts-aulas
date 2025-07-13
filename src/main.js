class Cavalo {
    nome;

    constructor(nome) {
        this.nome = nome;
    }
    
    galopa() {
        console.log(this.nome + ' galopando');
    }
}

function main() {
    const cavalos = [
        new Cavalo('Bolota'),
        new Cavalo('Bolota2'),
        new Cavalo('Bolota3'),
    ];
}

main();