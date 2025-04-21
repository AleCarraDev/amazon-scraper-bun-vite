# 🛍️ Amazon Scraper - Bun + Vite

![GitHub repo size](https://img.shields.io/github/repo-size/AleCarraDev/amazon-scraper-bun-vite)
![GitHub last commit](https://img.shields.io/github/last-commit/AleCarraDev/amazon-scraper-bun-vite)
![MIT License](https://img.shields.io/badge/license-MIT-green)

Scraper full-stack para produtos da Amazon utilizando **Bun no backend** e **Vite com HTML/CSS/JS no frontend**. Desenvolvido para fins educacionais, aprendizado de scraping moderno e apresentação em portfólio.

---

## 🚀 Funcionalidades

- 🔎 Busca de produtos da Amazon por palavra-chave
- ⭐ Captura de título, avaliação, número de reviews e imagem
- 📦 Exportação de resultados para CSV
- 📄 Suporte à paginação
- 🧠 Backend leve e moderno usando [Bun](https://bun.sh/)
- 🎨 Frontend simples e responsivo com Vite

---

## 🖼️ Preview

<p align="center">
  <img src="https://user-images.githubusercontent.com/placeholder/scraper-preview.png" width="700" alt="Amazon Scraper Preview">
</p>

---

## 🛠️ Tecnologias Utilizadas

- [Bun](https://bun.sh/) (backend)
- [Express.js](https://expressjs.com/)
- [Axios](https://axios-http.com/)
- [JSDOM](https://github.com/jsdom/jsdom)
- [Vite](https://vitejs.dev/)
- HTML, CSS e JavaScript Vanilla

---

## 🧪 Como Executar

### ⚙️ Backend (Bun)

```bash
cd backend
bun install
bun run index.ts
```

Acesse em: [http://localhost:3001/api/scrape?keyword=notebook](http://localhost:3001/api/scrape?keyword=notebook)

### 🌐 Frontend (Vite)

```bash
cd frontend
npm create vite@latest . -- --template vanilla
npm install
npm run dev
```

Acesse em: [http://localhost:5173](http://localhost:5173)

---

## 📤 Exportação CSV

Você pode exportar os resultados da busca para CSV via:

```
GET http://localhost:3001/api/export?keyword=notebook
```

---

## 🧑‍💻 Autor

- GitHub: [AleCarraDev](https://github.com/AleCarraDev)
- LinkedIn: [Alessandro Carra](https://www.linkedin.com/in/alessandro-carra-1495a958/)

---

## ⚖️ Licença

Distribuído sob a Licença MIT. Veja `LICENSE` para mais informações.

---

## 💬 Contribuições

Contribuições, issues e sugestões são bem-vindas! Este projeto está em constante evolução.

---
