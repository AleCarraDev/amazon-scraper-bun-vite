# Dockerfile - Backend com Bun
FROM oven/bun

WORKDIR /app
COPY . .

RUN bun install

CMD ["bun", "index.ts"]
