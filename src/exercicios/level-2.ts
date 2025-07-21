// =============================
// EXERCÍCIOS LEVEL 2: ARROW FUNCTIONS E CALLBACKS
// =============================
// Este arquivo contém 20 exercícios progressivos sobre Arrow Functions e Callbacks
// Cada exercício tem uma descrição clara e um exemplo de como deve funcionar

// =============================
// EXERCÍCIOS BÁSICOS (1-5)
// =============================

// EXERCÍCIO 1: Converter função normal para arrow function
// Converta a função abaixo para arrow function
// function saudacao(nome: string): string {
//     return `Olá, ${nome}!`;
// }
// Sua resposta:
// const saudacao = 

// EXERCÍCIO 2: Arrow function com múltiplos parâmetros
// Crie uma arrow function chamada 'calcularArea' que recebe largura e altura
// e retorna a área (largura * altura)
// Sua resposta:

// EXERCÍCIO 3: Arrow function com condicional
// Crie uma arrow function chamada 'verificarIdade' que recebe uma idade
// e retorna "Maior de idade" se >= 18, senão "Menor de idade"
// Sua resposta:

// EXERCÍCIO 4: Arrow function sem parâmetros
// Crie uma arrow function chamada 'obterDataAtual' que não recebe parâmetros
// e retorna a data atual como string
// Sua resposta:

// EXERCÍCIO 5: Arrow function com array
// Crie uma arrow function chamada 'primeiroElemento' que recebe um array de números
// e retorna o primeiro elemento
// Sua resposta:

// =============================
// EXERCÍCIOS COM CALLBACKS (6-10)
// =============================

// EXERCÍCIO 6: Função que recebe callback simples
// Crie uma função 'executarOperacao' que recebe dois números e uma função callback
// A função deve aplicar o callback nos dois números e retornar o resultado
// Exemplo: executarOperacao(5, 3, (a, b) => a + b) // deve retornar 8
// Sua resposta:

// EXERCÍCIO 7: Callback com validação
// Crie uma função 'validarEExecutar' que recebe um número e um callback
// Se o número for positivo, execute o callback, senão retorne "Número inválido"
// Exemplo: validarEExecutar(5, (n) => n * 2) // deve retornar 10
// Sua resposta:

// EXERCÍCIO 8: Múltiplos callbacks
// Crie uma função 'processarTexto' que recebe uma string e dois callbacks:
// - Um para transformar o texto (ex: maiúscula)
// - Outro para validar o resultado (ex: verificar se tem mais de 3 caracteres)
// Retorne o texto transformado se válido, senão "Texto inválido"
// Sua resposta:

// EXERCÍCIO 9: Callback com array
// Crie uma função 'filtrarETransformar' que recebe um array de números e dois callbacks:
// - Um para filtrar (ex: números pares)
// - Outro para transformar (ex: multiplicar por 2)
// Retorne o array filtrado e transformado
// Sua resposta:

// EXERCÍCIO 10: Callback assíncrono simulado
// Crie uma função 'simularDelay' que recebe uma mensagem e um callback
// Use setTimeout para simular um delay de 1 segundo, depois execute o callback com a mensagem
// Sua resposta:

// =============================
// EXERCÍCIOS COM MÉTODOS DE ARRAY (11-15)
// =============================

// EXERCÍCIO 11: Usar map com arrow function
// Dado o array [1, 2, 3, 4, 5], use map para criar um novo array com cada número elevado ao quadrado
// Sua resposta:

// EXERCÍCIO 12: Usar filter com arrow function
// Dado o array ["maçã", "banana", "abacaxi", "uva"], filtre apenas as frutas que começam com "a"
// Sua resposta:

// EXERCÍCIO 13: Usar reduce com arrow function
// Dado o array [10, 20, 30, 40], use reduce para somar todos os valores
// Sua resposta:

// EXERCÍCIO 14: Combinar map e filter
// Dado o array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]:
// 1. Filtre apenas números pares
// 2. Multiplique cada número por 3
// Sua resposta:

// EXERCÍCIO 15: Array de objetos
// Dado o array de pessoas: [{nome: "Ana", idade: 25}, {nome: "João", idade: 17}, {nome: "Maria", idade: 30}]
// Filtre apenas pessoas maiores de idade e retorne apenas os nomes
// Sua resposta:

// =============================
// EXERCÍCIOS AVANÇADOS (16-20)
// =============================

// EXERCÍCIO 16: Função que retorna função (Higher-Order Function)
// Crie uma função 'criarMultiplicador' que recebe um número e retorna uma arrow function
// que multiplica qualquer número pelo número inicial
// Exemplo: const multiplicarPor3 = criarMultiplicador(3); multiplicarPor3(4) // retorna 12
// Sua resposta:

// EXERCÍCIO 17: Callback com contexto de objeto
// Crie um objeto 'contador' com:
// - propriedade 'valor' iniciando em 0
// - método 'incrementar' que recebe um callback e incrementa o valor
// - o callback deve ser executado após incrementar, recebendo o novo valor
// Sua resposta:

// EXERCÍCIO 18: Promise com arrow function
// Crie uma função 'buscarUsuario' que retorna uma Promise
// A Promise deve resolver após 2 segundos com um objeto {id: 1, nome: "Usuário"}
// Use arrow functions para o executor da Promise
// Sua resposta:

// EXERCÍCIO 19: Callback de erro
// Crie uma função 'dividir' que recebe dois números e dois callbacks:
// - Um callback para sucesso (quando divisão é válida)
// - Um callback para erro (quando divisor é zero)
// Execute o callback apropriado baseado na situação
// Sua resposta:

// EXERCÍCIO 20: Composição de funções
// Crie uma função 'compor' que recebe duas arrow functions e retorna uma nova função
// que aplica a primeira função e depois a segunda no resultado
// Exemplo: const addEMultiply = compor((x) => x + 1, (x) => x * 2);
// addEMultiply(3) // deve retornar 8 (3+1=4, 4*2=8)
// Sua resposta:

// =============================
// DICAS IMPORTANTES
// =============================
/*
DICAS PARA RESOLVER OS EXERCÍCIOS:

1. Arrow functions básicas:
   - Sintaxe: (parâmetros) => expressão
   - Com chaves: (parâmetros) => { return valor; }

2. Callbacks:
   - São funções passadas como parâmetros
   - Podem ser executadas dentro de outras funções
   - Muito úteis para operações assíncronas

3. Métodos de array:
   - map(): transforma elementos
   - filter(): filtra elementos
   - reduce(): reduz a um valor

4. Higher-Order Functions:
   - Funções que recebem ou retornam outras funções
   - Muito poderosas para composição de código

5. Sempre teste suas soluções!
   - Descomente os testes
   - Execute o arquivo
   - Verifique se os resultados estão corretos
*/