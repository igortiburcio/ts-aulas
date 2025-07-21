// =============================
// LISTAS LIGADAS EM TYPESCRIPT
// =============================
// Este arquivo explica e implementa diferentes tipos de listas ligadas

// =============================
// O QUE SÃO LISTAS LIGADAS?
// =============================

/*
LISTA LIGADA (Linked List) é uma estrutura de dados linear onde os elementos
não são armazenados em posições contíguas na memória.

Cada elemento (chamado de NÓ) contém:
1. DADOS: O valor armazenado
2. PONTEIRO/REFERÊNCIA: Aponta para o próximo nó

ESTRUTURA VISUAL:
[Dado|Próximo] -> [Dado|Próximo] -> [Dado|null]
      Nó1              Nó2              Nó3

CARACTERÍSTICAS:
- Tamanho dinâmico (cresce/diminui conforme necessário)
- Inserção/remoção eficiente no início
- Acesso sequencial (não aleatório)
- Usa mais memória que arrays (devido aos ponteiros)
*/

// =============================
// COMPARAÇÃO: ARRAY vs LISTA LIGADA
// =============================

/*
| Operação          | Array     | Lista Ligada |
|-------------------|-----------|---------------|
| Acesso por índice | O(1)      | O(n)          |
| Busca             | O(n)      | O(n)          |
| Inserção início   | O(n)      | O(1)          |
| Inserção fim      | O(1)*     | O(n) ou O(1)** |
| Remoção início   | O(n)      | O(1)          |
| Remoção fim      | O(1)      | O(n)          |
| Memória           | Contígua  | Dispersa      |
| Cache locality    | Boa       | Ruim          |

* Pode ser O(n) se array precisar redimensionar
** O(1) se mantiver referência para o último nó

QUANDO USAR LISTA LIGADA:
✓ Tamanho varia muito durante execução
✓ Muitas inserções/remoções no início
✓ Não precisa de acesso aleatório por índice
✓ Implementação de outras estruturas (pilhas, filas)

QUANDO USAR ARRAY:
✓ Acesso frequente por índice
✓ Tamanho relativamente estável
✓ Performance de cache importante
✓ Menos uso de memória
*/

// =============================
// IMPLEMENTAÇÃO: NÓ DA LISTA
// =============================

/**
 * Classe que representa um nó individual da lista ligada
 */
class No<T> {
    public dado: T;
    public proximo: No<T> | null;

    constructor(dado: T) {
        this.dado = dado;
        this.proximo = null;
    }
}

// =============================
// IMPLEMENTAÇÃO: LISTA LIGADA SIMPLES
// =============================

/**
 * Implementação completa de uma Lista Ligada Simples
 */
class ListaLigada<T> {
    private cabeca: No<T> | null;
    private tamanho: number;

    constructor() {
        this.cabeca = null;
        this.tamanho = 0;
    }

    // =============================
    // MÉTODOS DE INSERÇÃO
    // =============================

    /**
     * Insere um elemento no início da lista
     * Complexidade: O(1)
     */
    inserirNoInicio(dado: T): void {
        const novoNo = new No(dado);
        novoNo.proximo = this.cabeca;
        this.cabeca = novoNo;
        this.tamanho++;
    }

    /**
     * Insere um elemento no final da lista
     * Complexidade: O(n)
     */
    inserirNoFim(dado: T): void {
        const novoNo = new No(dado);

        // Se a lista está vazia
        if (this.cabeca === null) {
            this.cabeca = novoNo;
        } else {
            // Encontra o último nó
            let atual = this.cabeca;
            while (atual.proximo !== null) {
                atual = atual.proximo;
            }
            atual.proximo = novoNo;
        }
        this.tamanho++;
    }

    /**
     * Insere um elemento em uma posição específica
     * Complexidade: O(n)
     */
    inserirNaPosicao(dado: T, posicao: number): void {
        if (posicao < 0 || posicao > this.tamanho) {
            throw new Error(`Posição inválida: ${posicao}. Deve estar entre 0 e ${this.tamanho}`);
        }

        // Inserção no início
        if (posicao === 0) {
            this.inserirNoInicio(dado);
            return;
        }

        const novoNo = new No(dado);
        let atual = this.cabeca!;

        // Navega até a posição anterior
        for (let i = 0; i < posicao - 1; i++) {
            atual = atual.proximo!;
        }

        novoNo.proximo = atual.proximo;
        atual.proximo = novoNo;
        this.tamanho++;
    }

    // =============================
    // MÉTODOS DE REMOÇÃO
    // =============================

    /**
     * Remove o primeiro elemento da lista
     * Complexidade: O(1)
     */
    removerDoInicio(): T | null {
        if (this.cabeca === null) {
            return null;
        }

        const dadoRemovido = this.cabeca.dado;
        this.cabeca = this.cabeca.proximo;
        this.tamanho--;
        return dadoRemovido;
    }

    /**
     * Remove o último elemento da lista
     * Complexidade: O(n)
     */
    removerDoFim(): T | null {
        if (this.cabeca === null) {
            return null;
        }

        // Se há apenas um elemento
        if (this.cabeca.proximo === null) {
            const dadoRemovido = this.cabeca.dado;
            this.cabeca = null;
            this.tamanho--;
            return dadoRemovido;
        }

        // Encontra o penúltimo nó
        let atual = this.cabeca;
        while (atual.proximo!.proximo !== null) {
            atual = atual.proximo!;
        }

        const dadoRemovido = atual.proximo!.dado;
        atual.proximo = null;
        this.tamanho--;
        return dadoRemovido;
    }

    /**
     * Remove elemento de uma posição específica
     * Complexidade: O(n)
     */
    removerDaPosicao(posicao: number): T | null {
        if (posicao < 0 || posicao >= this.tamanho) {
            throw new Error(`Posição inválida: ${posicao}. Deve estar entre 0 e ${this.tamanho - 1}`);
        }

        // Remoção do início
        if (posicao === 0) {
            return this.removerDoInicio();
        }

        let atual = this.cabeca!;

        // Navega até a posição anterior
        for (let i = 0; i < posicao - 1; i++) {
            atual = atual.proximo!;
        }

        const dadoRemovido = atual.proximo!.dado;
        atual.proximo = atual.proximo!.proximo;
        this.tamanho--;
        return dadoRemovido;
    }

    /**
     * Remove a primeira ocorrência de um valor
     * Complexidade: O(n)
     */
    removerPorValor(valor: T): boolean {
        if (this.cabeca === null) {
            return false;
        }

        // Se o primeiro elemento é o que queremos remover
        if (this.cabeca.dado === valor) {
            this.removerDoInicio();
            return true;
        }

        let atual = this.cabeca;
        while (atual.proximo !== null) {
            if (atual.proximo.dado === valor) {
                atual.proximo = atual.proximo.proximo;
                this.tamanho--;
                return true;
            }
            atual = atual.proximo;
        }

        return false; // Valor não encontrado
    }

    // =============================
    // MÉTODOS DE BUSCA E ACESSO
    // =============================

    /**
     * Busca um elemento na lista
     * Complexidade: O(n)
     */
    buscar(valor: T): number {
        let atual = this.cabeca;
        let posicao = 0;

        while (atual !== null) {
            if (atual.dado === valor) {
                return posicao;
            }
            atual = atual.proximo;
            posicao++;
        }

        return -1; // Não encontrado
    }

    /**
     * Obtém elemento em uma posição específica
     * Complexidade: O(n)
     */
    obterPorPosicao(posicao: number): T | null {
        if (posicao < 0 || posicao >= this.tamanho) {
            throw new Error(`Posição inválida: ${posicao}`);
        }

        let atual = this.cabeca!;
        for (let i = 0; i < posicao; i++) {
            atual = atual.proximo!;
        }

        return atual.dado;
    }

    /**
     * Verifica se a lista contém um valor
     * Complexidade: O(n)
     */
    contem(valor: T): boolean {
        return this.buscar(valor) !== -1;
    }

    // =============================
    // MÉTODOS UTILITÁRIOS
    // =============================

    /**
     * Retorna o tamanho da lista
     * Complexidade: O(1)
     */
    obterTamanho(): number {
        return this.tamanho;
    }

    /**
     * Verifica se a lista está vazia
     * Complexidade: O(1)
     */
    estaVazia(): boolean {
        return this.tamanho === 0;
    }

    /**
     * Limpa toda a lista
     * Complexidade: O(1)
     */
    limpar(): void {
        this.cabeca = null;
        this.tamanho = 0;
    }

    /**
     * Converte a lista para array
     * Complexidade: O(n)
     */
    paraArray(): T[] {
        const resultado: T[] = [];
        let atual = this.cabeca;

        while (atual !== null) {
            resultado.push(atual.dado);
            atual = atual.proximo;
        }

        return resultado;
    }

    /**
     * Inverte a lista
     * Complexidade: O(n)
     */
    inverter(): void {
        let anterior: No<T> | null = null;
        let atual = this.cabeca;
        let proximo: No<T> | null = null;

        while (atual !== null) {
            proximo = atual.proximo;
            atual.proximo = anterior;
            anterior = atual;
            atual = proximo;
        }

        this.cabeca = anterior; // anterior pode ser null se lista estava vazia
    }

    /**
     * Representação em string da lista
     * Complexidade: O(n)
     */
    toString(): string {
        if (this.cabeca === null) {
            return "Lista vazia";
        }

        const elementos: string[] = [];
        let atual: No<T> | null = this.cabeca;

        while (atual !== null) {
            elementos.push(String(atual.dado));
            atual = atual.proximo;
        }

        return elementos.join(" -> ") + " -> null";
    }

    /**
     * Itera sobre a lista com callback
     * Complexidade: O(n)
     */
    forEach(callback: (valor: T, indice: number) => void): void {
        let atual = this.cabeca;
        let indice = 0;

        while (atual !== null) {
            callback(atual.dado, indice);
            atual = atual.proximo;
            indice++;
        }
    }

    /**
     * Mapeia a lista para um novo array
     * Complexidade: O(n)
     */
    map<U>(callback: (valor: T, indice: number) => U): U[] {
        const resultado: U[] = [];
        this.forEach((valor, indice) => {
            resultado.push(callback(valor, indice));
        });
        return resultado;
    }

    /**
     * Filtra elementos da lista
     * Complexidade: O(n)
     */
    filter(callback: (valor: T, indice: number) => boolean): ListaLigada<T> {
        const novaLista = new ListaLigada<T>();
        this.forEach((valor, indice) => {
            if (callback(valor, indice)) {
                novaLista.inserirNoFim(valor);
            }
        });
        return novaLista;
    }
}

// =============================
// LISTA LIGADA DUPLAMENTE LIGADA
// =============================

/**
 * Nó para lista duplamente ligada
 */
class NoDuplo<T> {
    public dado: T;
    public proximo: NoDuplo<T> | null;
    public anterior: NoDuplo<T> | null;

    constructor(dado: T) {
        this.dado = dado;
        this.proximo = null;
        this.anterior = null;
    }
}

/**
 * Lista Duplamente Ligada - cada nó tem referência para o próximo E anterior
 * Vantagem: navegação bidirecional, remoção O(1) se tiver referência do nó
 */
class ListaDuplamenteLigada<T> {
    private cabeca: NoDuplo<T> | null;
    private cauda: NoDuplo<T> | null;
    private tamanho: number;

    constructor() {
        this.cabeca = null;
        this.cauda = null;
        this.tamanho = 0;
    }

    /**
     * Insere no início - O(1)
     */
    inserirNoInicio(dado: T): void {
        const novoNo = new NoDuplo(dado);

        if (this.cabeca === null) {
            this.cabeca = this.cauda = novoNo;
        } else {
            novoNo.proximo = this.cabeca;
            this.cabeca.anterior = novoNo;
            this.cabeca = novoNo;
        }
        this.tamanho++;
    }

    /**
     * Insere no fim - O(1)
     */
    inserirNoFim(dado: T): void {
        const novoNo = new NoDuplo(dado);

        if (this.cauda === null) {
            this.cabeca = this.cauda = novoNo;
        } else {
            this.cauda.proximo = novoNo;
            novoNo.anterior = this.cauda;
            this.cauda = novoNo;
        }
        this.tamanho++;
    }

    /**
     * Remove do início - O(1)
     */
    removerDoInicio(): T | null {
        if (this.cabeca === null) {
            return null;
        }

        const dadoRemovido = this.cabeca.dado;

        if (this.cabeca === this.cauda) {
            this.cabeca = this.cauda = null;
        } else {
            this.cabeca = this.cabeca.proximo!;
            this.cabeca.anterior = null;
        }

        this.tamanho--;
        return dadoRemovido;
    }

    /**
     * Remove do fim - O(1)
     */
    removerDoFim(): T | null {
        if (this.cauda === null) {
            return null;
        }

        const dadoRemovido = this.cauda.dado;

        if (this.cabeca === this.cauda) {
            this.cabeca = this.cauda = null;
        } else {
            this.cauda = this.cauda.anterior!;
            this.cauda.proximo = null;
        }

        this.tamanho--;
        return dadoRemovido;
    }

    obterTamanho(): number {
        return this.tamanho;
    }

    toString(): string {
        if (this.cabeca === null) {
            return "Lista vazia";
        }

        const elementos: string[] = [];
        let atual: NoDuplo<T> | null = this.cabeca;

        while (atual !== null) {
            elementos.push(String(atual.dado));
            atual = atual.proximo;
        }

        return "null <- " + elementos.join(" <-> ") + " -> null";
    }
}

// =============================
// EXEMPLOS PRÁTICOS E CASOS DE USO
// =============================

/**
 * Exemplo: Implementando uma Pilha usando Lista Ligada
 */
class Pilha<T> {
    private lista = new ListaLigada<T>();

    push(item: T): void {
        this.lista.inserirNoInicio(item);
    }

    pop(): T | null {
        return this.lista.removerDoInicio();
    }

    peek(): T | null {
        return this.lista.estaVazia() ? null : this.lista.obterPorPosicao(0);
    }

    isEmpty(): boolean {
        return this.lista.estaVazia();
    }

    size(): number {
        return this.lista.obterTamanho();
    }

    toString(): string {
        return `Pilha: ${this.lista.toString()}`;
    }
}

/**
 * Exemplo: Implementando uma Fila usando Lista Ligada
 */
class Fila<T> {
    private lista = new ListaLigada<T>();

    enqueue(item: T): void {
        this.lista.inserirNoFim(item);
    }

    dequeue(): T | null {
        return this.lista.removerDoInicio();
    }

    front(): T | null {
        return this.lista.estaVazia() ? null : this.lista.obterPorPosicao(0);
    }

    isEmpty(): boolean {
        return this.lista.estaVazia();
    }

    size(): number {
        return this.lista.obterTamanho();
    }

    toString(): string {
        return `Fila: ${this.lista.toString()}`;
    }
}

// =============================
// EXEMPLOS DE TESTE E DEMONSTRAÇÃO
// =============================

function exemploListaLigada() {
    console.log("=== TESTANDO LISTA LIGADA SIMPLES ===");

    // Criando uma nova lista
    const lista = new ListaLigada<number>();

    // Testando inserções
    console.log("\n--- Inserções ---");
    lista.inserirNoInicio(10);
    lista.inserirNoInicio(5);
    lista.inserirNoFim(20);
    lista.inserirNoFim(25);
    console.log("Após inserções:", lista.toString()); // 5 -> 10 -> 20 -> 25 -> null

    // Inserção em posição específica
    lista.inserirNaPosicao(15, 2);
    console.log("Após inserir 15 na posição 2:", lista.toString()); // 5 -> 10 -> 15 -> 20 -> 25 -> null

    // Testando buscas
    console.log("\n--- Buscas ---");
    console.log("Posição do 15:", lista.buscar(15)); // 2
    console.log("Elemento na posição 1:", lista.obterPorPosicao(1)); // 10
    console.log("Contém 20?", lista.contem(20)); // true
    console.log("Contém 100?", lista.contem(100)); // false

    // Testando remoções
    console.log("\n--- Remoções ---");
    console.log("Removido do início:", lista.removerDoInicio()); // 5
    console.log("Removido do fim:", lista.removerDoFim()); // 25
    console.log("Após remoções:", lista.toString()); // 10 -> 15 -> 20 -> null

    lista.removerPorValor(15);
    console.log("Após remover 15:", lista.toString()); // 10 -> 20 -> null

    // Testando métodos funcionais
    console.log("\n--- Métodos Funcionais ---");
    lista.inserirNoFim(30);
    lista.inserirNoFim(40);
    console.log("Lista atual:", lista.toString()); // 10 -> 20 -> 30 -> 40 -> null

    const dobrados = lista.map(x => x * 2);
    console.log("Dobrados:", dobrados); // [20, 40, 60, 80]

    const maioresQue20 = lista.filter(x => x > 20);
    console.log("Maiores que 20:", maioresQue20.toString()); // 30 -> 40 -> null

    // Testando inversão
    console.log("\n--- Inversão ---");
    console.log("Antes da inversão:", lista.toString());
    lista.inverter();
    console.log("Após inversão:", lista.toString());
}

function exemploListaDupla() {
    console.log("\n=== TESTANDO LISTA DUPLAMENTE LIGADA ===");
    const listaDupla = new ListaDuplamenteLigada<string>();

    listaDupla.inserirNoInicio("B");
    listaDupla.inserirNoInicio("A");
    listaDupla.inserirNoFim("C");
    listaDupla.inserirNoFim("D");

    console.log("Lista dupla:", listaDupla.toString());
    console.log("Removido do início:", listaDupla.removerDoInicio());
    console.log("Removido do fim:", listaDupla.removerDoFim());
    console.log("Lista dupla final:", listaDupla.toString());
}

function exemploEstruturasDerivadas() {
    // Testando Pilha
    console.log("\n=== TESTANDO PILHA ===");
    const pilha = new Pilha<number>();
    pilha.push(1);
    pilha.push(2);
    pilha.push(3);
    console.log(pilha.toString());
    console.log("Pop:", pilha.pop()); // 3 (LIFO)
    console.log(pilha.toString());

    // Testando Fila
    console.log("\n=== TESTANDO FILA ===");
    const fila = new Fila<string>();
    fila.enqueue("primeiro");
    fila.enqueue("segundo");
    fila.enqueue("terceiro");
    console.log(fila.toString());
    console.log("Dequeue:", fila.dequeue()); // "primeiro" (FIFO)
    console.log(fila.toString());
}

// Executar exemplos
exemploListaLigada();
exemploListaDupla();
exemploEstruturasDerivadas();

// =============================
// RESUMO E CONCLUSÕES
// =============================

/*
RESUMO SOBRE LISTAS LIGADAS:

1. VANTAGENS:
   ✓ Tamanho dinâmico
   ✓ Inserção/remoção eficiente no início O(1)
   ✓ Não desperdiça memória
   ✓ Base para outras estruturas (pilhas, filas, grafos)

2. DESVANTAGENS:
   ✗ Acesso aleatório lento O(n)
   ✗ Maior uso de memória (ponteiros)
   ✗ Ruim para cache locality
   ✗ Não permite busca binária

3. TIPOS:
   - SIMPLES: Cada nó aponta para o próximo
   - DUPLA: Cada nó aponta para próximo E anterior
   - CIRCULAR: Último nó aponta para o primeiro

4. CASOS DE USO:
   - Implementação de pilhas e filas
   - Listas de reprodução de música
   - Histórico de navegação (undo/redo)
   - Gerenciamento de memória
   - Grafos (lista de adjacência)

5. COMPLEXIDADES IMPORTANTES:
   - Inserção início: O(1)
   - Inserção fim: O(n) simples, O(1) dupla
   - Busca: O(n)
   - Acesso por índice: O(n)
   - Remoção início: O(1)
   - Remoção fim: O(n) simples, O(1) dupla

Esta implementação fornece uma base sólida para compreender
e utilizar listas ligadas em projetos TypeScript!
*/