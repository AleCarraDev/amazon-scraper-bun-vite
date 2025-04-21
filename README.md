# 🛍️ Amazon Scraper - Bun + Vite + CI/CD + Docker

![GitHub repo size](https://img.shields.io/github/repo-size/AleCarraDev/amazon-scraper-bun-vite)
![GitHub last commit](https://img.shields.io/github/last-commit/AleCarraDev/amazon-scraper-bun-vite)
![MIT License](https://img.shields.io/badge/license-MIT-green)

Scraper full-stack para produtos da Amazon utilizando **Bun no backend** e **Vite com HTML/CSS/JS no frontend**. Desenvolvido para fins educacionais, aprendizado de scraping moderno, automação de dados e apresentação em portfólio.

---

## 🚀 Funcionalidades

- 🔎 Busca de produtos da Amazon por palavra-chave
- ⭐ Captura de título, avaliação, número de reviews e imagem
- 🔗 Títulos clicáveis com redirecionamento para o produto na Amazon
- 📄 Suporte à paginação (5 por página)
- 🎨 Estilo simples, limpo e responsivo
- 🧠 Backend moderno com [Bun](https://bun.sh/)
- 🐳 Docker para execução padronizada
- ✅ Testes automatizados com Jest
- ⚙️ CI/CD com GitHub Actions

---


## 🛠️ Tecnologias Utilizadas

- [Bun](https://bun.sh/) (backend)
- [Express.js](https://expressjs.com/)
- [Axios](https://axios-http.com/)
- [JSDOM](https://github.com/jsdom/jsdom)
- [Vite](https://vitejs.dev/)
- HTML, CSS e JavaScript Vanilla
- Jest + Supertest para testes
- Docker e Docker Compose
- GitHub Actions

---

## ▶️ Como Executar o Projeto

### 🐳 Usando Docker (recomendado)

```bash
# Na raiz do projeto:
docker compose up --build
```

- Acesse o frontend: http://localhost:5173  
- A API do backend estará em: http://localhost:3001/api/scrape

---

### ⚙️ Executando Manualmente

#### Backend (Bun)

```bash
cd backend
bun install
bun run index.ts
```

#### Frontend (Vite)

```bash
cd frontend
npm install
npm run dev
```

---

## ✅ Testes

Execute os testes localmente com:

```bash
cd backend
bun test
```

> Os testes também rodam automaticamente a cada push via GitHub Actions.

---

## 👨‍💻 Autor

- GitHub: [AleCarraDev](https://github.com/AleCarraDev)
- LinkedIn: [Alessandro Carra](https://www.linkedin.com/in/alessandro-carra-1495a958/)

---

## ⚖️ Licença

Distribuído sob a Licença MIT. Veja `LICENSE` para mais informações.

---

## 💡 Melhorias Futuras

- 🧭 Filtro por avaliação mínima
- 🌐 Suporte à Amazon Brasil (.com.br)
- 🖼️ Lazy loading para imagens
- 🌓 Tema escuro
- 📦 Exportar resultados para CSV
- 🔍 Campo de pesquisa com histórico

---
