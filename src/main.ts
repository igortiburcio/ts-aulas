// =============================
// Estruturas de Dados em TypeScript: Lista Encadeada e Hashing
// =============================

// Classe Node representa um nó da lista encadeada
// Cada nó armazena um valor (number) e uma referência para o próximo nó
class Node {
    value: number; // valor armazenado no nó
    next: Node | null; // referência para o próximo nó (ou null)

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

// Exemplo visual: no1 -> no2 -> no3

// Classe LinkedList representa uma lista encadeada simples
// Permite adicionar valores e buscar valores na lista
class LinkedList {
    length: number = 0; // armazena o tamanho da lista
    head: Node | null; // primeiro nó da lista
    tail: Node | null; // último nó da lista

    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Método para adicionar um valor ao final da lista
    append(value: number) {
        const newNode = new Node(value);

        // Se a lista estiver vazia, head e tail apontam para o novo nó
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        // Se já existe tail, conecta o novo nó ao final e atualiza tail
        this.tail!.next = newNode; // o ! indica que tail não é null aqui
        this.tail = newNode;
        this.length++;
    }

    // Retorna o tamanho da lista
    size(): number {
        return this.length;
    }

    // Busca um nó pelo valor
    get(value: number): Node | null {
        let currentNode = this.head;

        // Percorre a lista até achar o valor ou chegar ao final
        while (currentNode && currentNode.value !== value) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }
}

// Função de hash simples: retorna o resto da divisão do valor pelo tamanho
// Usada para distribuir valores em diferentes listas (buckets)
function hash(value: number, size: number): number {
    return value % size;
}

// Função principal do programa
function main() {
    // Cria um array de listas encadeadas (buckets)
    const arr: LinkedList[] = [];
   
    // Inicializa 10 listas encadeadas e adiciona ao array
    for (let i = 0; i < 10; i++) {
        const list = new LinkedList();
        arr.push(list);
    }

    // Para cada lista, adiciona 1000 valores aleatórios entre 0 e 1000
    for (let i = 0; i < arr.length; i++) {
        const linkedList = arr[i];
        for (let i = 0; i < 1000; i++) {
            const value = Math.random() * 1000; // número aleatório
            linkedList!.append(value);
        }
    }

    // Exemplo de uso do hash: encontra o índice correspondente ao valor
    const value = 23983434;
    const index = hash(value, arr.length); // calcula em qual lista o valor deveria estar

    console.log(index); // mostra o índice calculado

    const linkedList = arr[index]; // pega a lista correspondente

    console.log(linkedList); // mostra a lista

    linkedList!.append(value); // adiciona o valor à lista

    console.log(linkedList!.get(value)); // busca o valor recém-adicionado

    console.log(arr.length, arr[index]); // mostra o tamanho do array e a lista
}

main(); // executa o programa