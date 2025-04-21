# Amazon Scraper (Bun + Vite)

## Descrição

Projeto full-stack com backend em Bun e frontend em Vite (HTML/CSS/JS puro), que realiza scraping da primeira página de resultados da Amazon para um termo de busca informado pelo usuário.

## Como executar

### Pré-requisitos:

- [Bun instalado](https://bun.sh/docs/installation)
- Node.js + npm (para o frontend com Vite)

### Backend

```bash
cd backend
bun install
bun run index.ts
```

A API estará disponível em: `http://localhost:3001/api/scrape?keyword=mouse`

### Frontend

```bash
cd frontend
npm create vite@latest . -- --template vanilla
npm install
npm run dev
```

Abra `http://localhost:5173` no navegador.

## Funcionalidades

- Campo de texto para digitar o termo de busca.
- Botão para disparar a busca.
- Resultados exibidos com imagem, título, avaliação e número de reviews.

## Observações

- A Amazon pode bloquear requisições automatizadas. Para uso contínuo, é necessário configurar proxies ou rotacionar user-agents.
- Este projeto é para fins educacionais.
