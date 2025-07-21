// =============================
// ORDENAÇÃO DE ARRAYS EM TYPESCRIPT
// =============================
// Este arquivo explica o método .sort() do TypeScript e o algoritmo Quick Sort

// =============================
// O MÉTODO .sort() EM TYPESCRIPT
// =============================

/*
O método .sort() é um método nativo do JavaScript/TypeScript que ordena os elementos
de um array IN-PLACE (modifica o array original) e retorna o array ordenado.

CARACTERÍSTICAS IMPORTANTES:
1. Modifica o array original
2. Por padrão, converte elementos para string e ordena lexicograficamente
3. Pode receber uma função de comparação personalizada
4. Complexidade: O(n log n) na maioria dos casos
5. Implementação varia entre engines, mas geralmente usa algoritmos híbridos
*/

// =============================
// EXEMPLOS BÁSICOS DO .sort()
// =============================

// 1. ORDENAÇÃO PADRÃO (LEXICOGRÁFICA)
console.log("=== ORDENAÇÃO PADRÃO ===");
const frutas = ["banana", "maçã", "abacaxi", "uva"];
console.log("Original:", frutas);
frutas.sort();
console.log("Ordenado:", frutas); // ["abacaxi", "banana", "maçã", "uva"]

// ATENÇÃO: Com números, o comportamento pode ser inesperado!
const numerosProblema = [10, 2, 1, 20, 3];
console.log("Números original:", numerosProblema);
numerosProblema.sort();
console.log("Números ordenados (ERRADO!):", numerosProblema); // [1, 10, 2, 20, 3]
// Isso acontece porque converte para string: "10" < "2" lexicograficamente

// 2. ORDENAÇÃO DE NÚMEROS (CORRETA)
console.log("\n=== ORDENAÇÃO DE NÚMEROS ===");
const numeros = [10, 2, 1, 20, 3];
console.log("Original:", numeros);

// Função de comparação para ordem crescente
numeros.sort((a, b) => a - b);
console.log("Crescente:", numeros); // [1, 2, 3, 10, 20]

// Função de comparação para ordem decrescente
const numerosDesc = [10, 2, 1, 20, 3];
numerosDesc.sort((a, b) => b - a);
console.log("Decrescente:", numerosDesc); // [20, 10, 3, 2, 1]

// 3. ORDENAÇÃO DE OBJETOS
console.log("\n=== ORDENAÇÃO DE OBJETOS ===");
const pessoas = [
    { nome: "Ana", idade: 25 },
    { nome: "João", idade: 30 },
    { nome: "Maria", idade: 20 },
    { nome: "Pedro", idade: 35 }
];

// Ordenar por idade
const pessoasPorIdade = [...pessoas]; // Cópia para não modificar o original
pessoasPorIdade.sort((a, b) => a.idade - b.idade);
console.log("Por idade:", pessoasPorIdade);

// Ordenar por nome
const pessoasPorNome = [...pessoas];
pessoasPorNome.sort((a, b) => a.nome.localeCompare(b.nome));
console.log("Por nome:", pessoasPorNome);

// =============================
// COMO FUNCIONA A FUNÇÃO DE COMPARAÇÃO
// =============================

/*
A função de comparação recebe dois elementos (a, b) e deve retornar:
- Número negativo: se a deve vir antes de b
- Zero: se a e b são equivalentes
- Número positivo: se a deve vir depois de b

Exemplo:
- Para ordem crescente: (a, b) => a - b
- Para ordem decrescente: (a, b) => b - a
*/

// Exemplo detalhado da função de comparação
function exemploComparacao() {
    const arr = [3, 1, 4, 1, 5];
    
    arr.sort((a, b) => {
        console.log(`Comparando ${a} e ${b}`);
        const resultado = a - b;
        console.log(`Resultado: ${resultado} (${resultado < 0 ? 'a antes de b' : resultado > 0 ? 'a depois de b' : 'equivalentes'})`);
        return resultado;
    });
    
    return arr;
}

// =============================
// IMPLEMENTAÇÃO INTERNA: ALGORITMOS MODERNOS
// =============================

/*
O método .sort() do JavaScript/TypeScript usa algoritmos sofisticados e otimizados.
Vamos entender como funciona no Chrome V8 (Node.js) e por que o Quick Sort ainda é importante!
*/

// =============================
// TIMSORT - O ALGORITMO DO CHROME V8
// =============================

/*
TIMSORT - USADO NO CHROME V8 (Node.js, Chrome):

O Chrome V8 usa o algoritmo Timsort, que é um algoritmo híbrido extremamente sofisticado
desenvolvido por Tim Peters para o Python em 2002.

CARACTERÍSTICAS DO TIMSORT:

1. HÍBRIDO: Combina Merge Sort + Insertion Sort
2. ADAPTATIVO: Detecta padrões existentes nos dados
3. ESTÁVEL: Mantém a ordem relativa de elementos iguais
4. OTIMIZADO: Performa excepcionalmente bem em dados do "mundo real"

COMO FUNCIONA O TIMSORT:

1. DETECÇÃO DE RUNS:
   - Procura sequências já ordenadas (crescente ou decrescente)
   - Se encontrar sequência decrescente, inverte ela
   - Exemplo: [1,2,3,7,6,5,4,8,9] tem runs: [1,2,3], [7,6,5,4] invertido para [4,5,6,7], [8,9]

2. EXTENSÃO DE RUNS:
   - Se um run é muito pequeno (< 32 elementos), estende usando Insertion Sort
   - Insertion Sort é muito eficiente para pequenas sequências

3. MERGE INTELIGENTE:
   - Usa Merge Sort para combinar os runs
   - Aplica otimizações como "galloping mode" para runs muito desiguais
   - Mantém uma pilha de runs pendentes para merge

4. OTIMIZAÇÕES AVANÇADAS:
   - Binary Insertion Sort para pequenos arrays
   - Galloping mode para merges assimétricos
   - Memória temporária otimizada

COMPLEXIDADE DO TIMSORT:
- Melhor caso: O(n) - quando dados já estão ordenados
- Caso médio: O(n log n)
- Pior caso: O(n log n) - garantido!
- Espaço: O(n)

POR QUE TIMSORT É TÃO EFICIENTE:

1. DADOS REAIS: A maioria dos dados tem alguma ordem parcial
2. ADAPTATIVO: Aproveita ordenações existentes
3. ESTÁVEL: Importante para objetos com múltiplas propriedades
4. OTIMIZADO: Muitas micro-otimizações para casos comuns

EXEMPLO DE COMO TIMSORT FUNCIONA:
*/

// Simulação conceitual do Timsort (simplificada)
function exemploTimsortConceitual() {
    const dados = [1, 2, 3, 8, 7, 6, 5, 9, 10, 4, 3, 2, 1];
    console.log("Dados originais:", dados);
    
    // Passo 1: Detectar runs
    console.log("\n=== DETECTANDO RUNS ===");
    console.log("Run 1 (crescente): [1, 2, 3]");
    console.log("Run 2 (decrescente): [8, 7, 6, 5] -> invertido: [5, 6, 7, 8]");
    console.log("Run 3 (crescente): [9, 10]");
    console.log("Run 4 (decrescente): [4, 3, 2, 1] -> invertido: [1, 2, 3, 4]");
    
    // Passo 2: Estender runs pequenos se necessário
    console.log("\n=== ESTENDENDO RUNS PEQUENOS ===");
    console.log("Run 3 muito pequeno, mas mantém: [9, 10]");
    
    // Passo 3: Merge inteligente
    console.log("\n=== MERGE DOS RUNS ===");
    console.log("Merge Run1 + Run2: [1, 2, 3] + [5, 6, 7, 8] = [1, 2, 3, 5, 6, 7, 8]");
    console.log("Merge com Run3: [1, 2, 3, 5, 6, 7, 8] + [9, 10] = [1, 2, 3, 5, 6, 7, 8, 9, 10]");
    console.log("Merge final: [1, 2, 3, 5, 6, 7, 8, 9, 10] + [1, 2, 3, 4] = [1, 1, 2, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10]");
}

// =============================
// OUTROS ENGINES E ALGORITMOS
// =============================

/*
OUTROS ENGINES JAVASCRIPT:

- SPIDERMONKEY (Firefox): Usa Merge Sort estável
- JAVASCRIPTCORE (Safari): Usa variações de Merge Sort
- CHAKRA (Edge legado): Usava Quick Sort com otimizações

Todos priorizam:
1. Estabilidade (manter ordem de elementos iguais)
2. Performance em dados reais
3. Complexidade garantida O(n log n)
*/

// =============================
// POR QUE ESTUDAR QUICK SORT ENTÃO?
// =============================

/*
IMPORTÂNCIA DO QUICK SORT:

Embora o .sort() moderno use Timsort, o Quick Sort continua sendo fundamental por:

1. EDUCAÇÃO E ENTREVISTAS:
   - Algoritmo clássico em ciência da computação
   - Pergunta comum em entrevistas técnicas
   - Base para entender "divide e conquista"

2. CASOS ESPECÍFICOS:
   - Ordenação in-place (pouca memória)
   - Sistemas embarcados com restrições de memória
   - Quando estabilidade não é importante

3. BASE PARA OUTROS ALGORITMOS:
   - Quickselect (encontrar k-ésimo elemento)
   - Variações como Introsort
   - Algoritmos de partição

4. PERFORMANCE BRUTA:
   - Em alguns casos, pode ser mais rápido que Timsort
   - Especialmente em dados completamente aleatórios
   - Menos overhead para arrays pequenos

5. COMPREENSÃO FUNDAMENTAL:
   - Ensina conceitos de recursividade
   - Demonstra trade-offs de algoritmos
   - Base para entender complexidade

COMPARAÇÃO TIMSORT vs QUICK SORT:

| Aspecto          | Timsort           | Quick Sort        |
|------------------|-------------------|-------------------|
| Estabilidade     | Estável           | Não estável       |
| Pior caso        | O(n log n)        | O(n²)             |
| Melhor caso      | O(n)              | O(n log n)        |
| Memória          | O(n)              | O(log n)          |
| Dados ordenados  | Excelente         | Ruim              |
| Dados aleatórios | Muito bom         | Excelente         |
| Implementação    | Complexa          | Simples           |
| Uso prático      | Produção          | Educação/Casos específicos |

CONCLUSÃO:
- Use .sort() nativo para aplicações reais (Timsort)
- Estude Quick Sort para entender algoritmos
- Implemente Quick Sort em entrevistas e exercícios
- Entenda que algoritmos modernos são híbridos e adaptativos
*/

// =============================
// ALGORITMO QUICK SORT
// =============================

/*
QUICK SORT - COMO FUNCIONA:

1. ESCOLHA DO PIVÔ: Escolhe um elemento como "pivô" (geralmente o último)
2. PARTIÇÃO: Reorganiza o array de forma que:
   - Elementos menores que o pivô ficam à esquerda
   - Elementos maiores que o pivô ficam à direita
   - O pivô fica na posição correta
3. RECURSÃO: Aplica o mesmo processo nas duas metades
4. CASO BASE: Arrays com 1 ou 0 elementos já estão ordenados

COMPLEXIDADE:
- Melhor caso: O(n log n)
- Caso médio: O(n log n)
- Pior caso: O(n²) - quando o pivô é sempre o menor ou maior elemento

VANTAGENS:
- Rápido na prática
- Ordenação in-place (usa pouca memória extra)
- Algoritmo "divide e conquista"

DESVANTAGENS:
- Pior caso O(n²)
- Não é estável (pode alterar ordem de elementos iguais)
*/

// =============================
// IMPLEMENTAÇÃO DO QUICK SORT
// =============================

/**
 * Implementação do algoritmo Quick Sort
 * @param arr Array a ser ordenado
 * @param inicio Índice de início (padrão: 0)
 * @param fim Índice de fim (padrão: arr.length - 1)
 * @returns Array ordenado
 */
function quickSort<T>(arr: T[], inicio: number = 0, fim: number = arr.length - 1): T[] {
    // Caso base: se inicio >= fim, o subarray tem 0 ou 1 elemento
    if (inicio < fim) {
        // Encontra o índice de partição
        const indicePivo = particionar(arr, inicio, fim);
        
        // Recursivamente ordena os elementos antes e depois da partição
        quickSort(arr, inicio, indicePivo - 1);
        quickSort(arr, indicePivo + 1, fim);
    }
    
    return arr;
}

/**
 * Função de partição do Quick Sort
 * Coloca o pivô na posição correta e organiza elementos menores à esquerda
 * e maiores à direita
 */
function particionar<T>(arr: T[], inicio: number, fim: number): number {
    // Verifica se o array e os índices são válidos
    if (fim >= arr.length || inicio < 0) {
        throw new Error("Índices inválidos para particionamento");
    }
    
    // Escolhe o último elemento como pivô
    const pivo = arr[fim]!; // Usamos ! porque já verificamos que fim < arr.length
    
    // Índice do menor elemento, indica a posição correta do pivô
    let i = inicio - 1;
    
    for (let j = inicio; j < fim; j++) {
        // Se o elemento atual é menor ou igual ao pivô
        if (arr[j]! <= pivo) {
            i++; // incrementa o índice do menor elemento
            trocar(arr, i, j);
        }
    }
    
    // Coloca o pivô na posição correta
    trocar(arr, i + 1, fim);
    
    return i + 1; // retorna a posição do pivô
}

/**
 * Função auxiliar para trocar dois elementos de posição
 */
function trocar<T>(arr: T[], i: number, j: number): void {
    // Verifica se os índices são válidos
    if (i < 0 || i >= arr.length || j < 0 || j >= arr.length) {
        throw new Error("Índices inválidos para troca");
    }
    
    const temp = arr[i]!;
    arr[i] = arr[j]!;
    arr[j] = temp;
}

// =============================
// QUICK SORT COM FUNÇÃO DE COMPARAÇÃO
// =============================

/**
 * Versão do Quick Sort que aceita função de comparação personalizada
 * (similar ao .sort() nativo)
 */
function quickSortComComparacao<T>(
    arr: T[], 
    compareFn?: (a: T, b: T) => number,
    inicio: number = 0, 
    fim: number = arr.length - 1
): T[] {
    // Função de comparação padrão (converte para string)
    const compare = compareFn || ((a: T, b: T) => {
        const aStr = String(a);
        const bStr = String(b);
        return aStr < bStr ? -1 : aStr > bStr ? 1 : 0;
    });
    
    if (inicio < fim) {
        const indicePivo = particionarComComparacao(arr, inicio, fim, compare);
        quickSortComComparacao(arr, compare, inicio, indicePivo - 1);
        quickSortComComparacao(arr, compare, indicePivo + 1, fim);
    }
    
    return arr;
}

function particionarComComparacao<T>(
    arr: T[], 
    inicio: number, 
    fim: number, 
    compare: (a: T, b: T) => number
): number {
    // Verifica se o array e os índices são válidos
    if (fim >= arr.length || inicio < 0) {
        throw new Error("Índices inválidos para particionamento");
    }
    
    const pivo = arr[fim]!;
    let i = inicio - 1;
    
    for (let j = inicio; j < fim; j++) {
        // Usa a função de comparação
        if (compare(arr[j]!, pivo) <= 0) {
            i++;
            trocar(arr, i, j);
        }
    }
    
    trocar(arr, i + 1, fim);
    return i + 1;
}

// =============================
// EXEMPLOS PRÁTICOS E TESTES
// =============================

console.log("\n=== TESTANDO QUICK SORT ===");

// Teste 1: Números
const numerosParaOrdenar = [64, 34, 25, 12, 22, 11, 90];
console.log("Original:", numerosParaOrdenar);
const numerosOrdenados = quickSort([...numerosParaOrdenar]);
console.log("Quick Sort:", numerosOrdenados);

// Teste 2: Strings
const palavras = ["banana", "maçã", "abacaxi", "uva", "laranja"];
console.log("\nPalavras original:", palavras);
const palavrasOrdenadas = quickSort([...palavras]);
console.log("Quick Sort:", palavrasOrdenadas);

// Teste 3: Com função de comparação
const numerosDesc2 = [64, 34, 25, 12, 22, 11, 90];
console.log("\nNúmeros para ordem decrescente:", numerosDesc2);
const numerosDescOrdenados = quickSortComComparacao(
    [...numerosDesc2], 
    (a, b) => b - a
);
console.log("Quick Sort decrescente:", numerosDescOrdenados);

// Teste 4: Objetos
const produtos = [
    { nome: "Notebook", preco: 2500 },
    { nome: "Mouse", preco: 50 },
    { nome: "Teclado", preco: 150 },
    { nome: "Monitor", preco: 800 }
];

console.log("\nProdutos original:", produtos);
const produtosPorPreco = quickSortComComparacao(
    [...produtos],
    (a, b) => a.preco - b.preco
);
console.log("Produtos por preço:", produtosPorPreco);

// =============================
// COMPARAÇÃO: .sort() vs Quick Sort
// =============================

function compararPerformance() {
    const tamanho = 10000;
    const arrayTeste = Array.from({ length: tamanho }, () => Math.floor(Math.random() * 1000));
    
    console.log("\n=== COMPARAÇÃO DE PERFORMANCE ===");
    console.log(`Testando com array de ${tamanho} elementos`);
    
    // Teste .sort() nativo
    const array1 = [...arrayTeste];
    const inicio1 = performance.now();
    array1.sort((a, b) => a - b);
    const fim1 = performance.now();
    console.log(`Array.sort(): ${(fim1 - inicio1).toFixed(2)}ms`);
    
    // Teste Quick Sort implementado
    const array2 = [...arrayTeste];
    const inicio2 = performance.now();
    quickSortComComparacao(array2, (a, b) => a - b);
    const fim2 = performance.now();
    console.log(`Quick Sort implementado: ${(fim2 - inicio2).toFixed(2)}ms`);
    
    // Verifica se os resultados são iguais
    const saoIguais = JSON.stringify(array1) === JSON.stringify(array2);
    console.log(`Resultados iguais: ${saoIguais}`);
}

// Descomente para testar performance
// compararPerformance();

// =============================
// VISUALIZAÇÃO DO QUICK SORT
// =============================

/**
 * Versão do Quick Sort que mostra os passos da execução
 */
function quickSortVisual(arr: number[], inicio: number = 0, fim: number = arr.length - 1, nivel: number = 0): number[] {
    const indentacao = "  ".repeat(nivel);
    console.log(`${indentacao}QuickSort([${arr.slice(inicio, fim + 1).join(", ")}])`);
    
    if (inicio < fim) {
        const indicePivo = particionarVisual(arr, inicio, fim, nivel);
        console.log(`${indentacao}Pivô na posição ${indicePivo}, valor: ${arr[indicePivo]}`);
        console.log(`${indentacao}Resultado da partição: [${arr.slice(inicio, fim + 1).join(", ")}]`);
        
        quickSortVisual(arr, inicio, indicePivo - 1, nivel + 1);
        quickSortVisual(arr, indicePivo + 1, fim, nivel + 1);
    }
    
    return arr;
}

function particionarVisual(arr: number[], inicio: number, fim: number, nivel: number): number {
    const indentacao = "  ".repeat(nivel);
    
    // Verifica se o array e os índices são válidos
    if (fim >= arr.length || inicio < 0) {
        throw new Error("Índices inválidos para particionamento visual");
    }
    
    const pivo = arr[fim]!;
    console.log(`${indentacao}Pivô escolhido: ${pivo}`);
    
    let i = inicio - 1;
    
    for (let j = inicio; j < fim; j++) {
        if (arr[j]! <= pivo) {
            i++;
            if (i !== j) {
                console.log(`${indentacao}Trocando ${arr[i]} e ${arr[j]}`);
                trocar(arr, i, j);
            }
        }
    }
    
    console.log(`${indentacao}Colocando pivô ${pivo} na posição ${i + 1}`);
    trocar(arr, i + 1, fim);
    
    return i + 1;
}

// Exemplo de visualização
console.log("\n=== VISUALIZAÇÃO DO QUICK SORT ===");
const arrayVisual = [64, 34, 25, 12, 22, 11, 90];
console.log("Array original:", arrayVisual);
quickSortVisual([...arrayVisual]);

// =============================
// RESUMO E CONCLUSÕES
// =============================

/*
RESUMO:

1. O método .sort() do TypeScript/JavaScript:
   - É muito otimizado e eficiente
   - Usa algoritmos híbridos (geralmente Timsort)
   - Aceita função de comparação personalizada
   - Modifica o array original

2. Quick Sort:
   - Algoritmo "divide e conquista"
   - Complexidade média O(n log n)
   - Rápido na prática
   - Base para entender algoritmos de ordenação

3. Na prática:
   - Use .sort() nativo para aplicações reais
   - Entenda Quick Sort para entrevistas e conhecimento teórico
   - Implemente algoritmos próprios apenas quando necessário

DICAS:
- Sempre use função de comparação para números
- Para objetos, defina claramente o critério de ordenação
- Considere criar cópia do array se não quiser modificar o original
- Para arrays grandes, o .sort() nativo é quase sempre mais rápido
*/