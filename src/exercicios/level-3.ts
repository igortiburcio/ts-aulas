// =============================
// EXERCÍCIOS LEVEL 3: MANIPULAÇÃO DE ARRAYS E STRINGS
// =============================
// Este arquivo contém 40 exercícios progressivos:
// - 20 exercícios sobre manipulação de arrays
// - 20 exercícios sobre manipulação de strings

// =============================
// PARTE 1: MANIPULAÇÃO DE ARRAYS (1-20)
// =============================

// EXERCÍCIO 1: Encontrar o maior número
// Crie uma função que recebe um array de números e retorna o maior número
// Exemplo: encontrarMaior([3, 7, 2, 9, 1]) // deve retornar 9
// Sua resposta:

// EXERCÍCIO 2: Remover duplicatas
// Crie uma função que recebe um array e remove elementos duplicados
// Exemplo: removerDuplicatas([1, 2, 2, 3, 3, 4]) // deve retornar [1, 2, 3, 4]
// Sua resposta:

// EXERCÍCIO 3: Somar todos os elementos
// Crie uma função que soma todos os números de um array
// Exemplo: somarArray([1, 2, 3, 4, 5]) // deve retornar 15
// Sua resposta:

// EXERCÍCIO 4: Filtrar números pares
// Crie uma função que retorna apenas os números pares de um array
// Exemplo: filtrarPares([1, 2, 3, 4, 5, 6]) // deve retornar [2, 4, 6]
// Sua resposta:

// EXERCÍCIO 5: Inverter array
// Crie uma função que inverte a ordem dos elementos de um array
// Exemplo: inverterArray([1, 2, 3, 4]) // deve retornar [4, 3, 2, 1]
// Sua resposta:

// EXERCÍCIO 6: Encontrar índice de elemento
// Crie uma função que encontra o índice da primeira ocorrência de um elemento
// Exemplo: encontrarIndice([10, 20, 30, 20], 20) // deve retornar 1
// Sua resposta:

// EXERCÍCIO 7: Agrupar por propriedade
// Dado um array de objetos com propriedade 'categoria', agrupe por categoria
// Exemplo: [{nome: "maçã", categoria: "fruta"}, {nome: "alface", categoria: "verdura"}]
// Deve retornar: {fruta: [{nome: "maçã", categoria: "fruta"}], verdura: [...]}
// Sua resposta:

// EXERCÍCIO 8: Calcular média
// Crie uma função que calcula a média dos números em um array
// Exemplo: calcularMedia([2, 4, 6, 8]) // deve retornar 5
// Sua resposta:

// EXERCÍCIO 9: Achatar array multidimensional
// Crie uma função que "achata" um array de arrays em um array simples
// Exemplo: achatar([[1, 2], [3, 4], [5]]) // deve retornar [1, 2, 3, 4, 5]
// Sua resposta:

// EXERCÍCIO 10: Contar ocorrências
// Crie uma função que conta quantas vezes cada elemento aparece no array
// Exemplo: contarOcorrencias(['a', 'b', 'a', 'c', 'b', 'a'])
// Deve retornar: {a: 3, b: 2, c: 1}
// Sua resposta:

// EXERCÍCIO 11: Dividir array em chunks
// Crie uma função que divide um array em grupos de tamanho específico
// Exemplo: dividirEmChunks([1, 2, 3, 4, 5, 6], 2) // deve retornar [[1, 2], [3, 4], [5, 6]]
// Sua resposta:

// EXERCÍCIO 12: Encontrar diferença entre arrays
// Crie uma função que retorna elementos que estão no primeiro array mas não no segundo
// Exemplo: diferenca([1, 2, 3, 4], [2, 4]) // deve retornar [1, 3]
// Sua resposta:

// EXERCÍCIO 13: Ordenar array de objetos
// Crie uma função que ordena um array de objetos por uma propriedade específica
// Exemplo: ordenarPor([{nome: "João", idade: 25}, {nome: "Ana", idade: 20}], "idade")
// Deve retornar ordenado por idade
// Sua resposta:

// EXERCÍCIO 14: Mesclar arrays sem duplicatas
// Crie uma função que mescla dois arrays removendo duplicatas
// Exemplo: mesclarSemDuplicatas([1, 2, 3], [3, 4, 5]) // deve retornar [1, 2, 3, 4, 5]
// Sua resposta:

// EXERCÍCIO 15: Encontrar elemento mais frequente
// Crie uma função que encontra o elemento que mais aparece no array
// Exemplo: maisFrequente([1, 2, 3, 2, 2, 4]) // deve retornar 2
// Sua resposta:

// EXERCÍCIO 16: Rotacionar array
// Crie uma função que rotaciona um array N posições para a direita
// Exemplo: rotacionar([1, 2, 3, 4, 5], 2) // deve retornar [4, 5, 1, 2, 3]
// Sua resposta:

// EXERCÍCIO 17: Verificar se array está ordenado
// Crie uma função que verifica se um array está ordenado crescentemente
// Exemplo: estaOrdenado([1, 2, 3, 4]) // deve retornar true
// Sua resposta:

// EXERCÍCIO 18: Criar array de números consecutivos
// Crie uma função que gera um array de números consecutivos
// Exemplo: gerarConsecutivos(3, 7) // deve retornar [3, 4, 5, 6, 7]
// Sua resposta:

// EXERCÍCIO 19: Encontrar segundo maior número
// Crie uma função que encontra o segundo maior número em um array
// Exemplo: segundoMaior([3, 7, 2, 9, 1, 8]) // deve retornar 8
// Sua resposta:

// EXERCÍCIO 20: Transpor matriz
// Crie uma função que transpõe uma matriz (array 2D)
// Exemplo: transpor([[1, 2, 3], [4, 5, 6]]) // deve retornar [[1, 4], [2, 5], [3, 6]]
// Sua resposta:

// =============================
// PARTE 2: MANIPULAÇÃO DE STRINGS (21-40)
// =============================

// EXERCÍCIO 21: Contar caracteres
// Crie uma função que conta o número de caracteres em uma string (sem espaços)
// Exemplo: contarCaracteres("Olá mundo") // deve retornar 8
// Sua resposta:

// EXERCÍCIO 22: Inverter string
// Crie uma função que inverte uma string
// Exemplo: inverterString("hello") // deve retornar "olleh"
// Sua resposta:

// EXERCÍCIO 23: Verificar palíndromo
// Crie uma função que verifica se uma string é um palíndromo
// Exemplo: ehPalindromo("arara") // deve retornar true
// Sua resposta:

// EXERCÍCIO 24: Capitalizar primeira letra
// Crie uma função que capitaliza a primeira letra de cada palavra
// Exemplo: capitalizarPalavras("olá mundo") // deve retornar "Olá Mundo"
// Sua resposta:

// EXERCÍCIO 25: Remover espaços extras
// Crie uma função que remove espaços extras (deixando apenas um espaço entre palavras)
// Exemplo: removerEspacosExtras("olá    mundo   !") // deve retornar "olá mundo !"
// Sua resposta:

// EXERCÍCIO 26: Contar palavras
// Crie uma função que conta o número de palavras em uma string
// Exemplo: contarPalavras("Olá mundo TypeScript") // deve retornar 3
// Sua resposta:

// EXERCÍCIO 27: Extrair números de string
// Crie uma função que extrai todos os números de uma string
// Exemplo: extrairNumeros("abc123def456") // deve retornar [123, 456]
// Sua resposta:

// EXERCÍCIO 28: Substituir caractere
// Crie uma função que substitui todas as ocorrências de um caractere por outro
// Exemplo: substituirCaractere("hello world", "l", "x") // deve retornar "hexxo worxd"
// Sua resposta:

// EXERCÍCIO 29: Verificar se contém apenas letras
// Crie uma função que verifica se uma string contém apenas letras
// Exemplo: apenasLetras("Hello") // deve retornar true
// Sua resposta:

// EXERCÍCIO 30: Gerar slug
// Crie uma função que converte uma string em slug (URL-friendly)
// Exemplo: gerarSlug("Olá Mundo!") // deve retornar "ola-mundo"
// Sua resposta:

// EXERCÍCIO 31: Encontrar substring mais longa sem repetição
// Crie uma função que encontra a maior substring sem caracteres repetidos
// Exemplo: substringMaisLonga("abcabcbb") // deve retornar "abc"
// Sua resposta:

// EXERCÍCIO 32: Comprimir string
// Crie uma função que comprime uma string contando caracteres consecutivos
// Exemplo: comprimirString("aaabbbccc") // deve retornar "a3b3c3"
// Sua resposta:

// EXERCÍCIO 33: Verificar anagrama
// Crie uma função que verifica se duas strings são anagramas
// Exemplo: saoAnagramas("listen", "silent") // deve retornar true
// Sua resposta:

// EXERCÍCIO 34: Extrair domínio de email
// Crie uma função que extrai o domínio de um endereço de email
// Exemplo: extrairDominio("usuario@exemplo.com") // deve retornar "exemplo.com"
// Sua resposta:

// EXERCÍCIO 35: Truncar string
// Crie uma função que trunca uma string e adiciona "..." se exceder o limite
// Exemplo: truncar("Esta é uma string longa", 10) // deve retornar "Esta é uma..."
// Sua resposta:

// EXERCÍCIO 36: Contar ocorrências de substring
// Crie uma função que conta quantas vezes uma substring aparece em uma string
// Exemplo: contarSubstring("abcabcabc", "abc") // deve retornar 3
// Sua resposta:

// EXERCÍCIO 37: Remover acentos
// Crie uma função que remove acentos de uma string
// Exemplo: removerAcentos("São Paulo") // deve retornar "Sao Paulo"
// Sua resposta:

// EXERCÍCIO 38: Validar CPF (formato)
// Crie uma função que valida se uma string está no formato de CPF (XXX.XXX.XXX-XX)
// Exemplo: validarFormatoCPF("123.456.789-01") // deve retornar true
// Sua resposta:

// EXERCÍCIO 39: Gerar iniciais
// Crie uma função que gera as iniciais de um nome
// Exemplo: gerarIniciais("João Silva Santos") // deve retornar "J.S.S."
// Sua resposta:

// EXERCÍCIO 40: Mascarar string
// Crie uma função que mascara parte de uma string com asteriscos
// Exemplo: mascarar("1234567890", 3, 6) // deve retornar "123****890"
// Sua resposta:

// =============================
// DICAS IMPORTANTES
// =============================
/*
DICAS PARA RESOLVER OS EXERCÍCIOS:

ARRAYS:
1. Métodos úteis: map(), filter(), reduce(), find(), some(), every()
2. Para ordenação: sort() com função comparadora
3. Para remoção de duplicatas: Set ou filter com indexOf
4. Para achatar arrays: flat() ou reduce
5. Para dividir arrays: slice() em loops

STRINGS:
1. Métodos úteis: split(), join(), slice(), substring(), charAt()
2. Para busca: indexOf(), includes(), match(), search()
3. Para transformação: toLowerCase(), toUpperCase(), trim()
4. Para substituição: replace(), replaceAll()
5. Regex é muito útil para validações e extrações

GERAL:
- Teste suas funções com diferentes casos
- Considere casos extremos (arrays/strings vazios)
- Use arrow functions quando apropriado
- Pense na performance para arrays grandes
*/