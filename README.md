# Projeto de Doação de Livros 📚

Este projeto é uma aplicação web para gerenciar a doação de livros. Ele permite que os usuários preencham um formulário com informações sobre os livros que desejam doar, proporcionando uma experiência acessível e responsiva.

---

## 🎯 Funcionalidades

- Preenchimento de formulário com informações do livro:
  - **Título**
  - **Categoria**
  - **Autor**
  - **Link da Imagem**
- Responsividade para diferentes tamanhos de tela.
- Design moderno e intuitivo.
- Gerenciamento de estado para capturar os dados do formulário.

## 🛠️ Tecnologias Utilizadas

- **React**: Framework principal para desenvolvimento da interface.
- **SCSS**: Pré-processador CSS para organizar os estilos.
- **React Router DOM**: Para a navegação entre páginas.
- **HTML5 e CSS3**: Padrões básicos para estruturação e design.

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos
- **Node.js** instalado.
- **Gerenciador de pacotes** (npm ou yarn).

### Passos


**1. Clone o repositório:**
   ```bash
   git clone https://github.com/Nataly-Costaa/biblioteca-vnw.git
   cd <nome-do-repositorio>
```

**2. Instale as dependências:**
   ```bash
   npm install
```

**3. Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
``` 

**4. Acesse a aplicação no navegador:**
   ```bash
   http://localhost:5173/
```  
## 🌐 Rotas do Projeto

- `/`: Página inicial.
- `/livrosDoados`: Página que exibe os livros já doados.
- `/queroDoar`: Página com formulário para doação de livros.

## 📱 Responsividade

- Layout ajustado para dispositivos móveis com largura de até 480px.
- Ajustes intermediários para dispositivos com largura entre 768px e 991px.

## 💡 Melhorias Futuras

- Adicionar backend para armazenamento e consulta dos dados.
- Implementar validação em tempo real nos campos do formulário.
- Exibir uma lista dinâmica de livros doados na página `/livrosDoados`.

## 🌍 Link do Deploy

[Doa livros](https://biblioteca-vnw.vercel.app/)