/**
 * BINARY SEARCH TREE (BST) - ÁRVORE BINÁRIA DE BUSCA
 * 
 * Uma Árvore Binária de Busca é uma estrutura de dados hierárquica que organiza
 * elementos de forma que permite busca, inserção e remoção eficientes.
 * 
 * PROPRIEDADES FUNDAMENTAIS:
 * 1. Cada nó pode ter no máximo 2 filhos (esquerdo e direito)
 * 2. Todos os valores na subárvore esquerda são MENORES que o valor do nó pai
 * 3. Todos os valores na subárvore direita são MAIORES que o valor do nó pai
 * 4. Não há valores duplicados (nesta implementação)
 * 
 * EXEMPLO VISUAL:
 *       8
 *      / \
 *     3   10
 *    / \    \
 *   1   6    14
 *      / \   /
 *     4   7 13
 * 
 * COMPLEXIDADE (árvore balanceada):
 * - Busca: O(log n)
 * - Inserção: O(log n)
 * - Remoção: O(log n)
 * 
 * COMPLEXIDADE (pior caso - árvore degenerada):
 * - Busca: O(n)
 * - Inserção: O(n)
 * - Remoção: O(n)
 * 
 * VANTAGENS:
 * - Busca eficiente em dados ordenados
 * - Inserção e remoção dinâmicas
 * - Travessia em ordem produz sequência ordenada
 * - Estrutura flexível que cresce conforme necessário
 * 
 * DESVANTAGENS:
 * - Pode degenerar em lista ligada se dados forem inseridos em ordem
 * - Requer mais memória que arrays (ponteiros para filhos)
 * - Não garante balanceamento automático
 */

// Definição de um nó da árvore
class TreeNode<T> {
    value: T;           // Valor armazenado no nó
    left: TreeNode<T> | null;   // Ponteiro para filho esquerdo
    right: TreeNode<T> | null;  // Ponteiro para filho direito

    constructor(value: T) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Implementação da Árvore Binária de Busca
class BinarySearchTree<T> {
    private root: TreeNode<T> | null;
    private compareFunction: (a: T, b: T) => number;

    /**
     * Construtor da BST
     * @param compareFunction Função para comparar elementos (opcional)
     *                       Retorna: < 0 se a < b, 0 se a === b, > 0 se a > b
     */
    constructor(compareFunction?: (a: T, b: T) => number) {
        this.root = null;
        
        // Função de comparação padrão para números e strings
        this.compareFunction = compareFunction || ((a: T, b: T) => {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        });
    }

    /**
     * INSERÇÃO - Adiciona um novo valor à árvore
     * Complexidade: O(log n) no caso médio, O(n) no pior caso
     * 
     * Algoritmo:
     * 1. Se a árvore estiver vazia, cria a raiz
     * 2. Compara o valor com o nó atual
     * 3. Se menor, vai para a esquerda; se maior, vai para a direita
     * 4. Repete até encontrar uma posição vazia
     */
    insert(value: T): void {
        this.root = this.insertRecursive(this.root, value);
    }

    private insertRecursive(node: TreeNode<T> | null, value: T): TreeNode<T> {
        // Caso base: encontrou posição vazia
        if (node === null) {
            return new TreeNode(value);
        }

        const comparison = this.compareFunction(value, node.value);
        
        if (comparison < 0) {
            // Valor é menor, vai para a esquerda
            node.left = this.insertRecursive(node.left, value);
        } else if (comparison > 0) {
            // Valor é maior, vai para a direita
            node.right = this.insertRecursive(node.right, value);
        }
        // Se comparison === 0, valor já existe, não insere duplicata

        return node;
    }

    /**
     * BUSCA - Procura um valor na árvore
     * Complexidade: O(log n) no caso médio, O(n) no pior caso
     * 
     * Algoritmo:
     * 1. Compara o valor procurado com o nó atual
     * 2. Se igual, encontrou
     * 3. Se menor, busca na subárvore esquerda
     * 4. Se maior, busca na subárvore direita
     * 5. Repete até encontrar ou chegar em nó nulo
     */
    search(value: T): boolean {
        return this.searchRecursive(this.root, value);
    }

    private searchRecursive(node: TreeNode<T> | null, value: T): boolean {
        // Caso base: nó não existe
        if (node === null) {
            return false;
        }

        const comparison = this.compareFunction(value, node.value);
        
        if (comparison === 0) {
            return true; // Encontrou o valor
        } else if (comparison < 0) {
            return this.searchRecursive(node.left, value); // Busca à esquerda
        } else {
            return this.searchRecursive(node.right, value); // Busca à direita
        }
    }

    /**
     * REMOÇÃO - Remove um valor da árvore
     * Complexidade: O(log n) no caso médio, O(n) no pior caso
     * 
     * Casos para remoção:
     * 1. Nó folha (sem filhos): simplesmente remove
     * 2. Nó com um filho: substitui pelo filho
     * 3. Nó com dois filhos: substitui pelo sucessor in-order (menor valor da subárvore direita)
     */
    remove(value: T): boolean {
        const initialSize = this.size();
        this.root = this.removeRecursive(this.root, value);
        return this.size() < initialSize; // Retorna true se removeu algo
    }

    private removeRecursive(node: TreeNode<T> | null, value: T): TreeNode<T> | null {
        if (node === null) {
            return null; // Valor não encontrado
        }

        const comparison = this.compareFunction(value, node.value);
        
        if (comparison < 0) {
            node.left = this.removeRecursive(node.left, value);
        } else if (comparison > 0) {
            node.right = this.removeRecursive(node.right, value);
        } else {
            // Encontrou o nó a ser removido
            
            // Caso 1: Nó folha ou com apenas um filho
            if (node.left === null) {
                return node.right;
            } else if (node.right === null) {
                return node.left;
            }
            
            // Caso 2: Nó com dois filhos
            // Encontra o sucessor in-order (menor valor na subárvore direita)
            const successor = this.findMin(node.right);
            node.value = successor.value;
            
            // Remove o sucessor da subárvore direita
            node.right = this.removeRecursive(node.right, successor.value);
        }
        
        return node;
    }

    /**
     * Encontra o nó com menor valor em uma subárvore
     */
    private findMin(node: TreeNode<T>): TreeNode<T> {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }

    /**
     * Encontra o nó com maior valor em uma subárvore
     */
    private findMax(node: TreeNode<T>): TreeNode<T> {
        while (node.right !== null) {
            node = node.right;
        }
        return node;
    }

    /**
     * TRAVESSIAS - Diferentes formas de percorrer a árvore
     */
    
    /**
     * Travessia In-Order (Esquerda -> Raiz -> Direita)
     * Produz os elementos em ordem crescente
     */
    inOrderTraversal(): T[] {
        const result: T[] = [];
        this.inOrderRecursive(this.root, result);
        return result;
    }

    private inOrderRecursive(node: TreeNode<T> | null, result: T[]): void {
        if (node !== null) {
            this.inOrderRecursive(node.left, result);   // Visita esquerda
            result.push(node.value);                    // Visita raiz
            this.inOrderRecursive(node.right, result);  // Visita direita
        }
    }

    /**
     * Travessia Pre-Order (Raiz -> Esquerda -> Direita)
     * Útil para copiar ou serializar a árvore
     */
    preOrderTraversal(): T[] {
        const result: T[] = [];
        this.preOrderRecursive(this.root, result);
        return result;
    }

    private preOrderRecursive(node: TreeNode<T> | null, result: T[]): void {
        if (node !== null) {
            result.push(node.value);                    // Visita raiz
            this.preOrderRecursive(node.left, result);  // Visita esquerda
            this.preOrderRecursive(node.right, result); // Visita direita
        }
    }

    /**
     * Travessia Post-Order (Esquerda -> Direita -> Raiz)
     * Útil para deletar a árvore ou calcular tamanho
     */
    postOrderTraversal(): T[] {
        const result: T[] = [];
        this.postOrderRecursive(this.root, result);
        return result;
    }

    private postOrderRecursive(node: TreeNode<T> | null, result: T[]): void {
        if (node !== null) {
            this.postOrderRecursive(node.left, result);  // Visita esquerda
            this.postOrderRecursive(node.right, result); // Visita direita
            result.push(node.value);                     // Visita raiz
        }
    }

    /**
     * MÉTODOS UTILITÁRIOS
     */
    
    /**
     * Verifica se a árvore está vazia
     */
    isEmpty(): boolean {
        return this.root === null;
    }

    /**
     * Retorna o número de nós na árvore
     */
    size(): number {
        return this.sizeRecursive(this.root);
    }

    private sizeRecursive(node: TreeNode<T> | null): number {
        if (node === null) {
            return 0;
        }
        return 1 + this.sizeRecursive(node.left) + this.sizeRecursive(node.right);
    }

    /**
     * Retorna a altura da árvore
     * Altura = número máximo de arestas da raiz até uma folha
     */
    height(): number {
        return this.heightRecursive(this.root);
    }

    private heightRecursive(node: TreeNode<T> | null): number {
        if (node === null) {
            return -1; // Árvore vazia tem altura -1
        }
        
        const leftHeight = this.heightRecursive(node.left);
        const rightHeight = this.heightRecursive(node.right);
        
        return 1 + Math.max(leftHeight, rightHeight);
    }

    /**
     * Encontra o menor valor na árvore
     */
    findMinValue(): T | null {
        if (this.root === null) {
            return null;
        }
        return this.findMin(this.root).value;
    }

    /**
     * Encontra o maior valor na árvore
     */
    findMaxValue(): T | null {
        if (this.root === null) {
            return null;
        }
        return this.findMax(this.root).value;
    }

    /**
     * Verifica se a árvore é uma BST válida
     */
    isValidBST(): boolean {
        return this.isValidBSTRecursive(this.root, null, null);
    }

    private isValidBSTRecursive(
        node: TreeNode<T> | null, 
        min: T | null, 
        max: T | null
    ): boolean {
        if (node === null) {
            return true;
        }

        // Verifica se o valor está dentro dos limites
        if ((min !== null && this.compareFunction(node.value, min) <= 0) ||
            (max !== null && this.compareFunction(node.value, max) >= 0)) {
            return false;
        }

        // Recursivamente verifica as subárvores com novos limites
        return this.isValidBSTRecursive(node.left, min, node.value) &&
               this.isValidBSTRecursive(node.right, node.value, max);
    }

    /**
     * Converte a árvore em uma representação visual simples
     */
    toString(): string {
        if (this.root === null) {
            return "Árvore vazia";
        }
        
        const lines: string[] = [];
        this.printTree(this.root, "", true, lines);
        return lines.join("\n");
    }

    private printTree(
        node: TreeNode<T> | null, 
        prefix: string, 
        isLast: boolean, 
        lines: string[]
    ): void {
        if (node !== null) {
            lines.push(prefix + (isLast ? "└── " : "├── ") + node.value);
            
            const children = [];
            if (node.left !== null) children.push({ node: node.left, isLeft: true });
            if (node.right !== null) children.push({ node: node.right, isLeft: false });
            
            children.forEach((child, index) => {
                const isLastChild = index === children.length - 1;
                const newPrefix = prefix + (isLast ? "    " : "│   ");
                this.printTree(child.node, newPrefix, isLastChild, lines);
            });
        }
    }
}

/**
 * EXEMPLOS DE USO E TESTES
 */

// Função para demonstrar o uso básico da BST
function exemploBasicoBST(): void {
    console.log("=== EXEMPLO BÁSICO DE BST ===");
    
    // Criando uma nova BST para números
    const bst = new BinarySearchTree<number>();
    
    // Inserindo valores
    console.log("Inserindo valores: 8, 3, 10, 1, 6, 14, 4, 7, 13");
    [8, 3, 10, 1, 6, 14, 4, 7, 13].forEach(value => {
        bst.insert(value);
        console.log(`Inserido: ${value}`);
    });
    
    console.log("\nÁrvore resultante:");
    console.log(bst.toString());
    
    // Testando busca
    console.log("\n=== TESTES DE BUSCA ===");
    [6, 15, 1, 20].forEach(value => {
        const found = bst.search(value);
        console.log(`Buscar ${value}: ${found ? 'ENCONTRADO' : 'NÃO ENCONTRADO'}`);
    });
    
    // Travessias
    console.log("\n=== TRAVESSIAS ===");
    console.log(`In-Order (crescente): [${bst.inOrderTraversal().join(', ')}]`);
    console.log(`Pre-Order: [${bst.preOrderTraversal().join(', ')}]`);
    console.log(`Post-Order: [${bst.postOrderTraversal().join(', ')}]`);
    
    // Informações da árvore
    console.log("\n=== INFORMAÇÕES DA ÁRVORE ===");
    console.log(`Tamanho: ${bst.size()} nós`);
    console.log(`Altura: ${bst.height()}`);
    console.log(`Menor valor: ${bst.findMinValue()}`);
    console.log(`Maior valor: ${bst.findMaxValue()}`);
    console.log(`É BST válida: ${bst.isValidBST()}`);
    
    // Testando remoção
    console.log("\n=== TESTES DE REMOÇÃO ===");
    console.log(`Removendo 1 (folha): ${bst.remove(1)}`);
    console.log(`Removendo 14 (um filho): ${bst.remove(14)}`);
    console.log(`Removendo 3 (dois filhos): ${bst.remove(3)}`);
    
    console.log("\nÁrvore após remoções:");
    console.log(bst.toString());
    console.log(`In-Order após remoções: [${bst.inOrderTraversal().join(', ')}]`);
}

// Exemplo com strings
function exemploBSTStrings(): void {
    console.log("\n\n=== EXEMPLO COM STRINGS ===");
    
    const bstStrings = new BinarySearchTree<string>();
    
    const palavras = ["banana", "apple", "cherry", "date", "elderberry", "fig", "grape"];
    
    console.log("Inserindo palavras:");
    palavras.forEach(palavra => {
        bstStrings.insert(palavra);
        console.log(`Inserido: ${palavra}`);
    });
    
    console.log("\nPalavras em ordem alfabética:");
    console.log(bstStrings.inOrderTraversal().join(", "));
    
    console.log("\nÁrvore de strings:");
    console.log(bstStrings.toString());
}

// Exemplo comparando BST com array
function comparacaoBSTvsArray(): void {
    console.log("\n\n=== COMPARAÇÃO: BST vs ARRAY ===");
    
    const valores = [50, 30, 70, 20, 40, 60, 80, 10, 25, 35, 45];
    
    // Array comum
    const array = [...valores];
    
    // BST
    const bst = new BinarySearchTree<number>();
    valores.forEach(v => bst.insert(v));
    
    console.log("Dados originais:", valores);
    console.log("Array:", array);
    console.log("BST (in-order):", bst.inOrderTraversal());
    
    // Busca no array vs BST
    const valorBusca = 35;
    
    console.log(`\nBuscando ${valorBusca}:`);
    
    // Busca linear no array
    const tempoInicioArray = Date.now();
    const encontradoArray = array.includes(valorBusca);
    const tempoArray = Date.now() - tempoInicioArray;
    
    // Busca na BST
    const tempoInicioBST = Date.now();
    const encontradoBST = bst.search(valorBusca);
    const tempoBST = Date.now() - tempoInicioBST;
    
    console.log(`Array: ${encontradoArray} (${tempoArray}ms)`);
    console.log(`BST: ${encontradoBST} (${tempoBST}ms)`);
    
    console.log(`\nVantagens da BST:`);
    console.log(`- Busca eficiente: O(log n) vs O(n) do array`);
    console.log(`- Inserção ordenada automática`);
    console.log(`- Remoção eficiente mantendo ordem`);
    
    console.log(`\nVantagens do Array:`);
    console.log(`- Acesso direto por índice: O(1)`);
    console.log(`- Menor uso de memória`);
    console.log(`- Melhor cache locality`);
}

// Executar exemplos
if (require.main === module) {
    exemploBasicoBST();
    exemploBSTStrings();
    comparacaoBSTvsArray();
}

// Exportar a classe para uso em outros módulos
export { BinarySearchTree, TreeNode };