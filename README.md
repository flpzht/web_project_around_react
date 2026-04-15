# Around the U.S.

Perfil de viagens interativo com cards de locais visitados pelos EUA, desenvolvido com foco na migração de um projeto HTML/CSS/JS puro para React.

---

## 👀 Visão Geral

Projeto desenvolvido com foco em **React e boas práticas de Front-end**, componentização e organização de código.

Este projeto demonstra capacidade de:

- Migrar uma aplicação HTML/CSS/JS pura para React com Vite
- Estruturar componentes reutilizáveis de forma clara e escalável
- Gerenciar estado com `useState`
- Trabalhar com props, renderização condicional e listas dinâmicas
- Versionar código corretamente com Git e GitHub

---

## 🎯 Objetivo

Portar um projeto de perfil de viagens — anteriormente construído em HTML, CSS e JavaScript puro — para React, aplicando conceitos de componentização, gerenciamento de estado e boas práticas modernas de desenvolvimento Front-end.

---

## 🛠 Stack

| Camada      | Tecnologia              |
|-------------|-------------------------|
| Framework   | React 18                |
| Build       | Vite                    |
| Estilização | CSS3 (BEM)              |
| Linguagem   | JavaScript (ES6+)       |
| Deploy      | GitHub Pages            |

---

## ⚙️ Funcionalidades

- Exibição de cards com imagens e nomes dos locais visitados
- Botão de curtir por card
- Formulários em popup para editar perfil e avatar
- Formulário em popup para adicionar novo card
- Popup de visualização de imagem em tela cheia
- Abertura e fechamento de popups via estado React (`useState`)
- Renderização dinâmica de cards com `map`

---

## 📸 Preview

![Preview do projeto](docs/preview.png)

---

## 📂 Estrutura de Pastas

```
web_project_around_react/
├─ public/
├─ src/
│  ├─ components/
│  │  ├─ App.jsx
│  │  ├─ Header/
│  │  │  └─ Header.jsx
│  │  ├─ Footer/
│  │  │  └─ Footer.jsx
│  │  └─ Main/
│  │     ├─ Main.jsx
│  │     └─ components/
│  │        ├─ Card/
│  │        │  └─ Card.jsx
│  │        ├─ ImagePopup/
│  │        │  └─ ImagePopup.jsx
│  │        └─ Popup/
│  │           ├─ Popup.jsx
│  │           └─ components/
│  │              ├─ NewCard/
│  │              │  └─ NewCard.jsx
│  │              ├─ EditProfile/
│  │              │  └─ EditProfile.jsx
│  │              └─ EditAvatar/
│  │                 └─ EditAvatar.jsx
│  ├─ images/
│  ├─ blocks/
│  ├─ vendor/
│  ├─ index.css
│  └─ main.jsx
├─ index.html
├─ vite.config.js
└─ README.md
```

---

## ▶️ Como rodar o projeto

```bash
# 1. Clone o repositório
git clone https://github.com/flpzht/web_project_around_react.git

# 2. Acesse a pasta
cd web_project_around_react

# 3. Instale as dependências
npm install

# 4. Rode o servidor local
npm run dev
```

O projeto abre automaticamente em `http://localhost:3000`.

---

## 📚 Aprendizados

- Migração completa de projeto HTML/CSS/JS puro para React com Vite
- Criação e organização de componentes funcionais reutilizáveis
- Gerenciamento de estado com `useState` para controle de popups
- Uso de props e desestruturação para comunicação entre componentes
- Renderização condicional com operador ternário e `&&`
- Renderização de listas dinâmicas com `map` e uso de `key`
- Adaptação de HTML e CSS legados para JSX e estrutura React

---

## 🔗 Deploy

🌐 Acesse o projeto: **[flpzht.github.io/web_project_around_react](https://flpzht.github.io/web_project_around_react/)**

---

## 👤 Autor

**Felipe Barros**
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](www.linkedin.com/in/felipecarvalhodesouzabarros)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/flpzht)