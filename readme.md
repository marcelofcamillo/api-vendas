<h2 align="center">
Curso API Restful com Node.js, TypeScript, TypeORM, JWT, Redis e Docker
</h2>

Este repositório acompanha meu progresso no curso **<a href="https://www.udemy.com/course/api-restful-de-vendas">API Restful Javascript com Node.js, Typescript, TypeORM etc</a>**, ministrado por Aluizio Developer. A proposta do curso é desenvolver uma API completa de vendas, com módulos de:

- Produtos
- Usuários
- Clientes
- Pedidos de compra

Além disso, são utilizados diversos recursos modernos, como:

- Autenticação com JWT
- Upload de arquivos
- Redis para cache
- Docker com PostgreSQL e Redis
- TypeORM
- Boas práticas de arquitetura em Node.js

---

## 🚀 Como rodar este projeto

Você precisará do Docker instalado em seu ambiente de desenvolvimento para rodar Postgres e Redis.

> 💡 Recomendação: se estiver no Windows, utilize WSL com Ubuntu para maior compatibilidade. Saiba mais: [Ambiente com WSL](https://www.aluiziodeveloper.com.br/ambiente-de-desenvolvimento-no-windows-10-11-com-wsl/)

### 1. Clonar o repositório

```shell
git clone https://github.com/marcelofcamillo/api-vendas.git
```

### 2. Instalar as dependências

```shell
cd api-vendas
npm ci
```

### 3. Criar o arquivo .env com:

```shell
# Application
PORT=3333
API_URL=http://localhost:3333
```

### 4. Iniciar o servidor de desenvolvimento

```shell
npm run dev
```

O servidor estará em execução no endereço `http://localhost:3333`.

### 🛠️ Tecnologias em uso<br>

Node.js<br>
TypeScript<br>
TypeORM<br>
PostgreSQL<br>
Redis<br>
Docker<br>
JWT<br>
Express

### 📚 Sobre o curso<br>

Curso ministrado por Aluizio Developer, disponível na Udemy.

### ✍️ Autor do repositório<br>

Marcelo Camillo<br>
[LinkedIn](https://www.linkedin.com/in/marcelofcamillo/)
