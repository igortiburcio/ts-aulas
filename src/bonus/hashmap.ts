/**
 * ========================================
 * HASHMAP (MAPA DE HASH) - GUIA COMPLETO
 * ========================================
 * 
 * O QUE É UM HASHMAP?
 * 
 * Um HashMap (também conhecido como Hash Table ou Tabela Hash) é uma estrutura de dados
 * que permite armazenar pares chave-valor de forma muito eficiente.
 * 
 * Imagine um dicionário:
 * - Palavra (chave) → Definição (valor)
 * - "gato" → "animal felino doméstico"
 * - "casa" → "construção onde pessoas moram"
 * 
 * ANALOGIA VISUAL:
 * ┌─────────────┬─────────────────────┐
 * │    CHAVE    │       VALOR         │
 * ├─────────────┼─────────────────────┤
 * │   "nome"    │      "João"         │
 * │   "idade"   │        25           │
 * │   "cidade"  │    "São Paulo"      │
 * └─────────────┴─────────────────────┘
 * 
 * COMO FUNCIONA INTERNAMENTE?
 * 
 * 1. FUNÇÃO HASH: Converte a chave em um número (índice)
 *    Exemplo: hash("nome") = 3
 * 
 * 2. ARRAY INTERNO: Usa esse número como posição no array
 *    [0] → vazio
 *    [1] → vazio  
 *    [2] → vazio
 *    [3] → {chave: "nome", valor: "João"}
 *    [4] → vazio
 * 
 * VANTAGENS:
 * ✅ Busca muito rápida: O(1) em média
 * ✅ Inserção rápida: O(1) em média
 * ✅ Remoção rápida: O(1) em média
 * ✅ Flexível: aceita qualquer tipo de chave/valor
 * 
 * DESVANTAGENS:
 * ❌ Não mantém ordem de inserção
 * ❌ Pode ter colisões (duas chaves gerarem o mesmo hash)
 * ❌ Usa mais memória que arrays simples
 * 
 * QUANDO USAR?
 * - Quando você precisa buscar dados rapidamente por uma chave
 * - Cache de dados
 * - Contadores (contar frequência de palavras)
 * - Mapeamento de IDs para objetos
 */

// ===== IMPLEMENTAÇÃO BÁSICA DE UM HASHMAP =====

/**
 * Interface para representar um par chave-valor
 */
interface KeyValuePair<K, V> {
    key: K;
    value: V;
}

/**
 * Implementação simples de um HashMap
 * 
 * Generics <K, V>:
 * - K = tipo da chave (Key)
 * - V = tipo do valor (Value)
 */
class SimpleHashMap<K, V> {
    // Array interno que armazena os dados
    // Cada posição pode conter um array de pares chave-valor (para tratar colisões)
    private buckets: Array<KeyValuePair<K, V>[]>;
    
    // Tamanho atual do array interno
    private capacity: number;
    
    // Quantidade de elementos armazenados
    private size: number;

    /**
     * Construtor - inicializa o HashMap
     * @param initialCapacity - tamanho inicial do array interno (padrão: 16)
     */
    constructor(initialCapacity: number = 16) {
        this.capacity = initialCapacity;
        this.buckets = new Array(this.capacity);
        this.size = 0;
        
        // Inicializa cada posição com um array vazio
        for (let i = 0; i < this.capacity; i++) {
            this.buckets[i] = [];
        }
    }

    /**
     * FUNÇÃO HASH - Converte uma chave em um índice do array
     * 
     * Esta é a parte mais importante do HashMap!
     * Uma boa função hash deve:
     * 1. Sempre retornar o mesmo número para a mesma chave
     * 2. Distribuir as chaves uniformemente pelo array
     * 3. Ser rápida de calcular
     */
    private hash(key: K): number {
        // Converte a chave para string
        const keyString = String(key);
        let hash = 0;
        
        // Algoritmo simples de hash (djb2)
        for (let i = 0; i < keyString.length; i++) {
            const char = keyString.charCodeAt(i);
            hash = ((hash << 5) + hash) + char; // hash * 33 + char
            hash = hash & hash; // Converte para 32bit integer
        }
        
        // Garante que o resultado seja positivo e dentro do tamanho do array
        return Math.abs(hash) % this.capacity;
    }

    /**
     * INSERIR/ATUALIZAR - Adiciona ou atualiza um par chave-valor
     * Complexidade: O(1) em média, O(n) no pior caso
     */
    set(key: K, value: V): void {
        // 1. Calcula o índice usando a função hash
        const index = this.hash(key);
        
        // 2. Garante que o bucket existe
        if (!this.buckets[index]) {
            this.buckets[index] = [];
        }
        
        const bucket = this.buckets[index];
        
        // 3. Verifica se a chave já existe no bucket
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i]!.key === key) {
                // Chave já existe, apenas atualiza o valor
                bucket[i]!.value = value;
                return;
            }
        }
        
        // 4. Chave não existe, adiciona novo par
        bucket.push({ key, value });
        this.size++;
        
        console.log(`✅ Inserido: ${String(key)} → ${String(value)} (índice: ${index})`);
    }

    /**
     * BUSCAR - Encontra o valor associado a uma chave
     * Complexidade: O(1) em média, O(n) no pior caso
     */
    get(key: K): V | undefined {
        // 1. Calcula o índice usando a função hash
        const index = this.hash(key);
        
        // 2. Pega o bucket nessa posição
        const bucket = this.buckets[index];
        
        // Verifica se o bucket existe
        if (!bucket) {
            console.log(`❌ Não encontrado: ${String(key)}`);
            return undefined;
        }
        
        // 3. Procura a chave no bucket
        for (const pair of bucket) {
            if (pair.key === key) {
                console.log(`🔍 Encontrado: ${String(key)} → ${String(pair.value)}`);
                return pair.value;
            }
        }
        
        // 4. Chave não encontrada
        console.log(`❌ Não encontrado: ${String(key)}`);
        return undefined;
    }

    /**
     * VERIFICAR EXISTÊNCIA - Verifica se uma chave existe
     */
    has(key: K): boolean {
        return this.get(key) !== undefined;
    }

    /**
     * REMOVER - Remove um par chave-valor
     * Complexidade: O(1) em média, O(n) no pior caso
     */
    delete(key: K): boolean {
        // 1. Calcula o índice
        const index = this.hash(key);
        
        // 2. Pega o bucket
        const bucket = this.buckets[index];
        
        // Verifica se o bucket existe
        if (!bucket) {
            return false; // Chave não encontrada
        }
        
        // 3. Procura e remove a chave
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i] && bucket[i].key === key) {
                bucket.splice(i, 1); // Remove o elemento
                this.size--;
                console.log(`🗑️ Removido: ${String(key)}`);
                return true;
            }
        }
        
        return false; // Chave não encontrada
    }

    /**
     * TAMANHO - Retorna a quantidade de elementos
     */
    getSize(): number {
        return this.size;
    }

    /**
     * VERIFICAR SE ESTÁ VAZIO
     */
    isEmpty(): boolean {
        return this.size === 0;
    }

    /**
     * LIMPAR - Remove todos os elementos
     */
    clear(): void {
        for (let i = 0; i < this.capacity; i++) {
            this.buckets[i] = [];
        }
        this.size = 0;
        console.log("🧹 HashMap limpo!");
    }

    /**
     * OBTER TODAS AS CHAVES
     */
    keys(): K[] {
        const allKeys: K[] = [];
        
        for (const bucket of this.buckets) {
            for (const pair of bucket) {
                allKeys.push(pair.key);
            }
        }
        
        return allKeys;
    }

    /**
     * OBTER TODOS OS VALORES
     */
    values(): V[] {
        const allValues: V[] = [];
        
        for (const bucket of this.buckets) {
            for (const pair of bucket) {
                allValues.push(pair.value);
            }
        }
        
        return allValues;
    }

    /**
     * OBTER TODOS OS PARES CHAVE-VALOR
     */
    entries(): [K, V][] {
        const allEntries: [K, V][] = [];
        
        for (const bucket of this.buckets) {
            for (const pair of bucket) {
                allEntries.push([pair.key, pair.value]);
            }
        }
        
        return allEntries;
    }

    /**
     * ITERAR - Executa uma função para cada par chave-valor
     */
    forEach(callback: (value: V, key: K) => void): void {
        for (const bucket of this.buckets) {
            for (const pair of bucket) {
                callback(pair.value, pair.key);
            }
        }
    }

    /**
     * VISUALIZAR - Mostra o estado interno do HashMap (para debug)
     */
    debug(): void {
        console.log("\n📊 Estado interno do HashMap:");
        console.log(`Capacidade: ${this.capacity}`);
        console.log(`Tamanho: ${this.size}`);
        console.log("Buckets:");
        
        for (let i = 0; i < this.capacity; i++) {
            const bucket = this.buckets[i];
            if (bucket && bucket.length > 0) {
                console.log(`  [${i}]: ${bucket.map(p => `${String(p.key)}→${String(p.value)}`).join(", ")}`);
            }
        }
        console.log("");
    }
}

// ===== EXEMPLOS PRÁTICOS DE USO =====

function exemploBasico() {
    console.log("\n🎯 === EXEMPLO BÁSICO ===");
    
    // Criando um HashMap para armazenar informações de pessoas
    const pessoas = new SimpleHashMap<string, string>();
    
    // Inserindo dados
    pessoas.set("nome", "João");
    pessoas.set("idade", "25");
    pessoas.set("cidade", "São Paulo");
    pessoas.set("profissao", "Desenvolvedor");
    
    // Buscando dados
    console.log(`Nome: ${pessoas.get("nome")}`);
    console.log(`Idade: ${pessoas.get("idade")}`);
    
    // Verificando existência
    console.log(`Tem 'email'? ${pessoas.has("email")}`);
    console.log(`Tem 'nome'? ${pessoas.has("nome")}`);
    
    // Atualizando um valor
    pessoas.set("idade", "26"); // Atualiza a idade
    
    // Mostrando todas as chaves e valores
    console.log("Todas as chaves:", pessoas.keys());
    console.log("Todos os valores:", pessoas.values());
    
    pessoas.debug();
}

function exemploContador() {
    console.log("\n📊 === EXEMPLO: CONTADOR DE PALAVRAS ===");
    
    const contador = new SimpleHashMap<string, number>();
    const texto = "o gato subiu no telhado o gato desceu do telhado";
    const palavras = texto.split(" ");
    
    // Conta a frequência de cada palavra
    for (const palavra of palavras) {
        const contadorAtual = contador.get(palavra) || 0;
        contador.set(palavra, contadorAtual + 1);
    }
    
    console.log("Frequência das palavras:");
    contador.forEach((count, word) => {
        console.log(`  "${word}": ${count} vezes`);
    });
    
    contador.debug();
}

function exemploCache() {
    console.log("\n💾 === EXEMPLO: CACHE DE DADOS ===");
    
    // Simulando um cache para resultados de operações caras
    const cache = new SimpleHashMap<string, number>();
    
    // Função que simula uma operação cara (ex: consulta ao banco de dados)
    function operacaoCara(id: string): number {
        console.log(`🔄 Executando operação cara para ID: ${id}`);
        return Math.random() * 1000; // Simula um resultado
    }
    
    // Função que usa cache
    function obterDadosComCache(id: string): number {
        // Verifica se já está no cache
        if (cache.has(id)) {
            console.log(`⚡ Cache HIT para ID: ${id}`);
            return cache.get(id)!;
        }
        
        // Não está no cache, executa operação e armazena
        console.log(`💽 Cache MISS para ID: ${id}`);
        const resultado = operacaoCara(id);
        cache.set(id, resultado);
        return resultado;
    }
    
    // Testando o cache
    console.log(`Resultado 1: ${obterDadosComCache("user123")}`);
    console.log(`Resultado 2: ${obterDadosComCache("user456")}`);
    console.log(`Resultado 3: ${obterDadosComCache("user123")}`); // Deve usar cache
    console.log(`Resultado 4: ${obterDadosComCache("user456")}`); // Deve usar cache
    
    cache.debug();
}

function exemploObjetosComplexos() {
    console.log("\n🏗️ === EXEMPLO: OBJETOS COMPLEXOS ===");
    
    interface Usuario {
        id: number;
        nome: string;
        email: string;
        ativo: boolean;
    }
    
    const usuarios = new SimpleHashMap<number, Usuario>();
    
    // Inserindo usuários
    usuarios.set(1, { id: 1, nome: "Ana", email: "ana@email.com", ativo: true });
    usuarios.set(2, { id: 2, nome: "Bruno", email: "bruno@email.com", ativo: false });
    usuarios.set(3, { id: 3, nome: "Carlos", email: "carlos@email.com", ativo: true });
    
    // Buscando um usuário
    const usuario = usuarios.get(2);
    if (usuario) {
        console.log(`Usuário encontrado: ${usuario.nome} (${usuario.email})`);
    }
    
    // Listando todos os usuários ativos
    console.log("\nUsuários ativos:");
    usuarios.forEach((user, id) => {
        if (user.ativo) {
            console.log(`  ID ${id}: ${user.nome}`);
        }
    });
    
    usuarios.debug();
}

// ===== COMPARAÇÃO: HASHMAP vs ARRAY =====

function comparacaoPerformance() {
    console.log("\n⚡ === COMPARAÇÃO DE PERFORMANCE ===");
    
    // Preparando dados de teste
    const hashMap = new SimpleHashMap<string, number>();
    const array: {key: string, value: number}[] = [];
    
    const numElementos = 1000;
    
    // Inserindo elementos
    console.log(`Inserindo ${numElementos} elementos...`);
    
    console.time("HashMap - Inserção");
    for (let i = 0; i < numElementos; i++) {
        hashMap.set(`key${i}`, i);
    }
    console.timeEnd("HashMap - Inserção");
    
    console.time("Array - Inserção");
    for (let i = 0; i < numElementos; i++) {
        array.push({key: `key${i}`, value: i});
    }
    console.timeEnd("Array - Inserção");
    
    // Buscando elementos
    console.log("\nBuscando elementos...");
    
    console.time("HashMap - Busca");
    for (let i = 0; i < 100; i++) {
        hashMap.get(`key${Math.floor(Math.random() * numElementos)}`);
    }
    console.timeEnd("HashMap - Busca");
    
    console.time("Array - Busca");
    for (let i = 0; i < 100; i++) {
        const key = `key${Math.floor(Math.random() * numElementos)}`;
        array.find(item => item.key === key);
    }
    console.timeEnd("Array - Busca");
    
    console.log("\n📝 Resultado:");
    console.log("- HashMap: O(1) para busca - muito mais rápido!");
    console.log("- Array: O(n) para busca - fica lento com muitos elementos");
}

// ===== EXECUTANDO OS EXEMPLOS =====

function executarTodosExemplos() {
    console.log("🚀 === DEMONSTRAÇÃO COMPLETA DO HASHMAP ===");
    
    exemploBasico();
    exemploContador();
    exemploCache();
    exemploObjetosComplexos();
    comparacaoPerformance();
    
    console.log("\n✅ === RESUMO FINAL ===");
    console.log("\n🎯 QUANDO USAR HASHMAP:");
    console.log("- Quando você precisa buscar dados rapidamente por uma chave");
    console.log("- Para implementar caches");
    console.log("- Para contar frequências");
    console.log("- Para mapear IDs para objetos");
    console.log("- Quando a ordem dos elementos não importa");
    
    console.log("\n🎯 QUANDO NÃO USAR HASHMAP:");
    console.log("- Quando você precisa manter a ordem de inserção");
    console.log("- Quando você precisa acessar elementos por índice numérico");
    console.log("- Para listas pequenas (overhead desnecessário)");
    console.log("- Quando você precisa de operações matemáticas em sequência");
    
    console.log("\n💡 DICA: JavaScript já tem Map() e Set() nativos que são HashMaps otimizados!");
}

// Descomente a linha abaixo para executar os exemplos:
// executarTodosExemplos();

export { SimpleHashMap, executarTodosExemplos };