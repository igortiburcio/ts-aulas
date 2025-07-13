export class Usuario {
    nome: string;
    idade: number;
    cargo: string;

    constructor(nome: string, idade: number, cargo: string) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    processar() {
        return {
            nome: this.nome,
            idade: this.idade,
            cargo: this.cargo,
        };
    }
}