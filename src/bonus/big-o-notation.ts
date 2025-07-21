/**
 * ========================================
 * NOTAÇÃO BIG O - GUIA COMPLETO PARA INICIANTES
 * ========================================
 * 
 * A notação Big O é uma ferramenta matemática fundamental para analisar
 * a eficiência de algoritmos. Este guia explica tudo que você precisa saber!
 */

/**
 * ========================================
 * 1. O QUE É A NOTAÇÃO BIG O?
 * ========================================
 * 
 * A notação Big O descreve como o tempo de execução ou uso de memória
 * de um algoritmo cresce conforme o tamanho da entrada aumenta.
 * 
 * Pense assim: se você tem 10 elementos para processar vs 1.000.000,
 * como isso afeta o tempo que seu código demora para executar?
 * 
 * ANALOGIA SIMPLES:
 * Imagine que você precisa encontrar uma pessoa em diferentes situações:
 * - Em uma sala com 10 pessoas (entrada pequena)
 * - Em um estádio com 100.000 pessoas (entrada grande)
 * 
 * Diferentes estratégias terão diferentes "crescimentos" de tempo:
 * - Perguntar para cada pessoa uma por uma = O(n)
 * - Usar um alto-falante e a pessoa se identificar = O(1)
 * - Comparar com uma foto de cada pessoa = O(n)
 */

/**
 * ========================================
 * 2. POR QUE A NOTAÇÃO BIG O É IMPORTANTE?
 * ========================================
 * 
 * 1. PREDIÇÃO DE PERFORMANCE: Saber se seu código vai "quebrar" com dados grandes
 * 2. COMPARAÇÃO DE ALGORITMOS: Escolher a melhor solução para um problema
 * 3. OTIMIZAÇÃO: Identificar gargalos no seu código
 * 4. ENTREVISTAS: É pergunta comum em processos seletivos
 * 5. ESCALABILIDADE: Garantir que sua aplicação funcione com milhões de usuários
 */

/**
 * ========================================
 * 3. PRINCIPAIS COMPLEXIDADES BIG O
 * ========================================
 * 
 * Do MELHOR para o PIOR (em termos de performance):
 * 
 * O(1)      - Constante     - EXCELENTE
 * O(log n)  - Logarítmica   - MUITO BOM
 * O(n)      - Linear        - BOM
 * O(n log n)- Linearítmica  - ACEITÁVEL
 * O(n²)     - Quadrática    - RUIM
 * O(n³)     - Cúbica        - MUITO RUIM
 * O(2^n)    - Exponencial   - TERRÍVEL
 * O(n!)     - Fatorial      - IMPRATICÁVEL
 */

// ========================================
// EXEMPLOS PRÁTICOS COM CÓDIGO
// ========================================

/**
 * O(1) - TEMPO CONSTANTE
 * Não importa o tamanho da entrada, sempre executa na mesma velocidade
 */
function exemploO1(array: number[]): number {
    // Acessar o primeiro elemento sempre demora o mesmo tempo,
    // seja um array de 10 ou 1.000.000 elementos
    return array[0] ?? 0;
}

/**
 * O(log n) - TEMPO LOGARÍTMICO
 * A cada iteração, reduzimos o problema pela metade
 * Muito eficiente! Cresce muito lentamente
 */
function buscaBinaria(array: number[], target: number): number {
    let esquerda = 0;
    let direita = array.length - 1;
    
    while (esquerda <= direita) {
        const meio = Math.floor((esquerda + direita) / 2);
        
        if ((array[meio] ?? 0) === target) {
            return meio;
        } else if ((array[meio] ?? 0) < target) {
            esquerda = meio + 1;  // Elimina metade esquerda
        } else {
            direita = meio - 1;   // Elimina metade direita
        }
    }
    
    return -1;
}

/**
 * O(n) - TEMPO LINEAR
 * Se a entrada dobra, o tempo dobra
 * Muito comum e geralmente aceitável
 */
function exemploOn(array: number[]): number {
    let soma = 0;
    
    // Precisa visitar cada elemento exatamente uma vez
    for (let i = 0; i < array.length; i++) {
        soma += array[i] ?? 0;
    }
    
    return soma;
}

/**
 * O(n²) - TEMPO QUADRÁTICO
 * Se a entrada dobra, o tempo quadruplica!
 * Cuidado com loops aninhados
 */
function exemploOn2(array: number[]): number[][] {
    const pares: number[][] = [];
    
    // Loop dentro de loop = n × n = n²
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i !== j) {
                pares.push([array[i] ?? 0, array[j] ?? 0]);
            }
        }
    }
    
    return pares;
}

/**
 * O(2^n) - TEMPO EXPONENCIAL
 * MUITO PERIGOSO! Cresce absurdamente rápido
 * Geralmente indica que você precisa de uma abordagem diferente
 */
function fibonacciIneficiente(n: number): number {
    if (n <= 1) return n;
    
    // Cada chamada gera duas novas chamadas = 2^n
    return fibonacciIneficiente(n - 1) + fibonacciIneficiente(n - 2);
}

// ========================================
// COMPARAÇÃO VISUAL DE CRESCIMENTO
// ========================================

/**
 * TABELA DE CRESCIMENTO:
 * 
 * n     | O(1) | O(log n) | O(n) | O(n log n) | O(n²)  | O(2^n)
 * ------|------|----------|------|------------|--------|---------
 * 1     | 1    | 1        | 1    | 1          | 1      | 2
 * 10    | 1    | 3        | 10   | 33         | 100    | 1.024
 * 100   | 1    | 7        | 100  | 664        | 10.000 | 1.267.650.600.228.229.401.496.703.205.376
 * 1.000 | 1    | 10       | 1.000| 9.966      | 1.000.000 | (número com 301 dígitos!)
 * 
 * OBSERVE: O(2^n) se torna impraticável muito rapidamente!
 */

// ========================================
// REGRAS PARA CALCULAR BIG O
// ========================================

/**
 * REGRA 1: IGNORE CONSTANTES
 * O(2n) = O(n)
 * O(500) = O(1)
 * O(n/2) = O(n)
 */
function exemploConstantes(array: number[]): void {
    // Mesmo fazendo 3 loops separados, ainda é O(n)
    for (let i = 0; i < array.length; i++) {
        console.log(array[i] ?? 0);
    }
    
    for (let i = 0; i < array.length; i++) {
        console.log((array[i] ?? 0) * 2);
    }
    
    for (let i = 0; i < array.length; i++) {
        console.log((array[i] ?? 0) * 3);
    }
    // O(n) + O(n) + O(n) = O(3n) = O(n)
}

/**
 * REGRA 2: CONSIDERE O TERMO DOMINANTE
 * O(n² + n) = O(n²)
 * O(n + log n) = O(n)
 * O(n! + n²) = O(n!)
 */
function exemploTermoDominante(array: number[]): void {
    // O(n²) - loop aninhado
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i] ?? 0, array[j] ?? 0);
        }
    }
    
    // O(n) - loop simples
    for (let i = 0; i < array.length; i++) {
        console.log(array[i] ?? 0);
    }
    
    // Resultado final: O(n²) + O(n) = O(n²)
    // O n² "domina" o n quando n fica grande
}

/**
 * REGRA 3: ENTRADAS DIFERENTES = VARIÁVEIS DIFERENTES
 */
function exemploEntradasDiferentes(array1: number[], array2: number[]): void {
    // Não é O(n²)! É O(a × b) onde a = array1.length, b = array2.length
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            console.log(array1[i] ?? 0, array2[j] ?? 0);
        }
    }
}

// ========================================
// COMPLEXIDADE DE ESPAÇO
// ========================================

/**
 * Big O também se aplica ao USO DE MEMÓRIA!
 * 
 * ESPAÇO CONSTANTE - O(1):
 * Usa a mesma quantidade de memória independente da entrada
 */
function espacoConstante(array: number[]): number {
    let soma = 0;  // Apenas uma variável, sempre O(1) espaço
    
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    
    return soma;
}

/**
 * ESPAÇO LINEAR - O(n):
 * Usa memória proporcional ao tamanho da entrada
 */
function espacoLinear(array: number[]): number[] {
    const novoArray: number[] = [];  // Cresce com o tamanho da entrada
    
    for (let i = 0; i < array.length; i++) {
        novoArray.push((array[i] ?? 0) * 2);
    }
    
    return novoArray;  // O(n) espaço
}

// ========================================
// ALGORITMOS DE ORDENAÇÃO E SUAS COMPLEXIDADES
// ========================================

/**
 * BUBBLE SORT - O(n²) tempo, O(1) espaço
 * Simples mas ineficiente para arrays grandes
 */
function bubbleSort(array: number[]): number[] {
    const arr = [...array];  // Cópia para não modificar o original
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if ((arr[j] ?? 0) > (arr[j + 1] ?? 0)) {
                // Troca elementos
                const temp = arr[j] ?? 0;
                arr[j] = arr[j + 1] ?? 0;
                arr[j + 1] = temp;
            }
        }
    }
    
    return arr;
}

/**
 * MERGE SORT - O(n log n) tempo, O(n) espaço
 * Muito mais eficiente para arrays grandes
 */
function mergeSort(array: number[]): number[] {
    if (array.length <= 1) return array;
    
    const meio = Math.floor(array.length / 2);
    const esquerda = mergeSort(array.slice(0, meio));
    const direita = mergeSort(array.slice(meio));
    
    return merge(esquerda, direita);
}

function merge(esquerda: number[], direita: number[]): number[] {
    const resultado: number[] = [];
    let i = 0, j = 0;
    
    while (i < esquerda.length && j < direita.length) {
        if ((esquerda[i] ?? 0) <= (direita[j] ?? 0)) {
            resultado.push(esquerda[i] ?? 0);
            i++;
        } else {
            resultado.push(direita[j] ?? 0);
            j++;
        }
    }
    
    return resultado.concat(esquerda.slice(i) ?? []).concat(direita.slice(j) ?? []);
}

// ========================================
// ESTRUTURAS DE DADOS E SUAS COMPLEXIDADES
// ========================================

/**
 * ARRAY:
 * - Acesso: O(1)
 * - Busca: O(n)
 * - Inserção: O(n) no meio, O(1) no final
 * - Remoção: O(n) no meio, O(1) no final
 */

/**
 * HASH TABLE (Map/Object):
 * - Acesso: O(1) médio
 * - Busca: O(1) médio
 * - Inserção: O(1) médio
 * - Remoção: O(1) médio
 */

/**
 * LINKED LIST:
 * - Acesso: O(n)
 * - Busca: O(n)
 * - Inserção: O(1) se você tem a referência
 * - Remoção: O(1) se você tem a referência
 */

// ========================================
// EXEMPLOS PRÁTICOS E ARMADILHAS COMUNS
// ========================================

/**
 * ARMADILHA 1: MÉTODOS DE ARRAY PODEM SER O(n)
 */
function armadilhaMetodosArray(arrays: number[][]): number[] {
    const resultado: number[] = [];
    
    for (let i = 0; i < arrays.length; i++) {
        // CUIDADO! concat() é O(n), então isso é O(n²) no total!
        resultado.concat(arrays[i] ?? []);
    }
    
    return resultado;
}

/**
 * SOLUÇÃO MELHOR:
 */
function solucaoMelhor(arrays: number[][]): number[] {
    const resultado: number[] = [];
    
    for (let i = 0; i < arrays.length; i++) {
        // push() é O(1), então isso é O(n) no total
        const currentArray = arrays[i] ?? [];
        for (let j = 0; j < currentArray.length; j++) {
            resultado.push(currentArray[j] ?? 0);
        }
    }
    
    return resultado;
}

/**
 * ARMADILHA 2: RECURSÃO PODE SER EXPONENCIAL
 */
function fibonacciOtimizado(n: number, memo: Map<number, number> = new Map()): number {
    if (n <= 1) return n;
    
    if (memo.has(n)) {
        return memo.get(n) ?? 0;
    }
    
    const resultado = fibonacciOtimizado(n - 1, memo) + fibonacciOtimizado(n - 2, memo);
    memo.set(n, resultado);
    
    return resultado;
    // Com memoização: O(n) em vez de O(2^n)!
}

// ========================================
// DICAS PRÁTICAS PARA OTIMIZAÇÃO
// ========================================

/**
 * DICA 1: USE HASH TABLES PARA BUSCAS RÁPIDAS
 */
function encontrarDuplicatasLento(array: number[]): number[] {
    const duplicatas: number[] = [];
    
    // O(n²) - muito lento!
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            const valueI = array[i] ?? 0;
            const valueJ = array[j] ?? 0;
            if (valueI === valueJ && !duplicatas.includes(valueI)) {
                duplicatas.push(valueI);
            }
        }
    }
    
    return duplicatas;
}

function encontrarDuplicatasRapido(array: number[]): number[] {
    const visto = new Set<number>();
    const duplicatas = new Set<number>();
    
    // O(n) - muito mais rápido!
    for (const num of array) {
        if (visto.has(num)) {
            duplicatas.add(num);
        } else {
            visto.add(num);
        }
    }
    
    return Array.from(duplicatas);
}

/**
 * DICA 2: EVITE LOOPS ANINHADOS DESNECESSÁRIOS
 */
function somaParesLento(array: number[]): number {
    let soma = 0;
    
    // O(n²) desnecessário!
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            const value = array[i] ?? 0;
            if (value % 2 === 0) {
                soma += value;
                break;  // Sai do loop interno, mas ainda é ineficiente
            }
        }
    }
    
    return soma;
}

function somaParesRapido(array: number[]): number {
    let soma = 0;
    
    // O(n) - muito melhor!
    for (const num of array) {
        if (num % 2 === 0) {
            soma += num;
        }
    }
    
    return soma;
}

// ========================================
// FUNÇÃO DE TESTE E DEMONSTRAÇÃO
// ========================================

function demonstrarBigO(): void {
    console.log("=== DEMONSTRAÇÃO DA NOTAÇÃO BIG O ===");
    
    // Testando com diferentes tamanhos
    const tamanhos = [10, 100, 1000];
    
    tamanhos.forEach(tamanho => {
        console.log(`\n--- Testando com ${tamanho} elementos ---`);
        
        const array = Array.from({ length: tamanho }, (_, i) => i);
        
        // O(1) - sempre rápido
        console.time(`O(1) - ${tamanho} elementos`);
        exemploO1(array);
        console.timeEnd(`O(1) - ${tamanho} elementos`);
        
        // O(n) - cresce linearmente
        console.time(`O(n) - ${tamanho} elementos`);
        exemploOn(array);
        console.timeEnd(`O(n) - ${tamanho} elementos`);
        
        // O(n²) - cresce quadraticamente (cuidado com arrays grandes!)
        if (tamanho <= 100) {  // Só testamos com arrays pequenos
            console.time(`O(n²) - ${tamanho} elementos`);
            exemploOn2(array.slice(0, Math.min(tamanho, 50)));  // Limitamos para evitar travamento
            console.timeEnd(`O(n²) - ${tamanho} elementos`);
        }
    });
    
    console.log("\n=== COMPARAÇÃO DE ALGORITMOS DE ORDENAÇÃO ===");
    
    const arrayDesordenado = [64, 34, 25, 12, 22, 11, 90];
    
    console.time("Bubble Sort O(n²)");
    const resultadoBubble = bubbleSort(arrayDesordenado);
    console.timeEnd("Bubble Sort O(n²)");
    
    console.time("Merge Sort O(n log n)");
    const resultadoMerge = mergeSort(arrayDesordenado);
    console.timeEnd("Merge Sort O(n log n)");
    
    console.log("Resultado Bubble Sort:", resultadoBubble);
    console.log("Resultado Merge Sort:", resultadoMerge);
    
    console.log("\n=== FIBONACCI: INEFICIENTE vs OTIMIZADO ===");
    
    const n = 35;
    
    console.log(`Calculando Fibonacci(${n})...`);
    
    // CUIDADO: Fibonacci ineficiente pode demorar muito!
    // console.time("Fibonacci O(2^n) - LENTO!");
    // const resultadoLento = fibonacciIneficiente(n);
    // console.timeEnd("Fibonacci O(2^n) - LENTO!");
    
    console.time("Fibonacci O(n) - RÁPIDO!");
    const resultadoRapido = fibonacciOtimizado(n);
    console.timeEnd("Fibonacci O(n) - RÁPIDO!");
    
    console.log(`Fibonacci(${n}) = ${resultadoRapido}`);
}

// ========================================
// RESUMO E CONCLUSÕES
// ========================================

/**
 * RESUMO FINAL:
 * 
 * 1. Big O descreve como algoritmos escalam com o tamanho da entrada
 * 2. Foque no termo dominante e ignore constantes
 * 3. O(1) e O(log n) são excelentes
 * 4. O(n) e O(n log n) são bons
 * 5. O(n²) e piores devem ser evitados quando possível
 * 6. Use estruturas de dados apropriadas (Hash Tables para buscas)
 * 7. Cuidado com loops aninhados e recursão sem memoização
 * 8. Teste com dados grandes para identificar gargalos
 * 
 * LEMBRE-SE:
 * - Código que funciona com 100 elementos pode não funcionar com 1.000.000
 * - Otimização prematura é ruim, mas ignorar Big O é pior
 * - Sempre considere o caso médio e pior caso
 * - Na dúvida, meça o tempo de execução real!
 */

// Descomente a linha abaixo para executar a demonstração
// demonstrarBigO();