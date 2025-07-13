# Dependencias

Como instalar o git:

(Debian/Ubuntu - Terminal)
```bash
sudo apt update
sudo apt install git
```

Quem usa windows use o Chocolatey para gerenciar pacotes:

Link: https://chocolatey.org/install

(Windows - PowerShell)
```bash
choco install git
```

Instalar o Bun:

(Debian/Ubuntu - Terminal)
```bash
sudo apt update
sudo apt install bun
```

Quem usa windows use o Chocolatey para gerenciar pacotes e instalar o bun.

Link: https://bun.sh/docs/install

(Windows - PowerShell)
```bash
choco install bun
```

# Instalar as dependencias

```bash
bun install
```

# Rodar o projeto

```bash
bun start
```

# Rodando arquivos fora do script
Use o caminho relativo para o arquivo.
O caminho relativo é o caminho do arquivo em relação ao arquivo que está sendo executado.

Exemplo:

```bash
bun run src/exercicios/level-1.ts
```

Cada '/' representa uma pasta.



