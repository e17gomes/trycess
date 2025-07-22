# 🚀 TRYCESS - Gerenciador de Produtos

Sistema moderno de gerenciamento de produtos, criado com **Next.js**, **Tailwind CSS** e tecnologias atuais, garantindo **performance**, **escalabilidade** e **ótima DX (Developer Experience)** com **Turbopack**.

---

## 🧰 Tecnologias Utilizadas

| Tecnologia                      | Propósito                                                                                         |
| ------------------------------ | ------------------------------------------------------------------------------------------------- |
| **Next.js (v15.4.1)**           | Framework React com SSR/SSG, rotas automáticas e Turbopack para desenvolvimento ultra rápido.    |
| **React (v19.1.0)**             | Biblioteca principal para criação de interfaces reativas.                                         |
| **Tailwind CSS (v4)**           | Framework utilitário para estilização rápida e responsiva.                                        |
| **Lucide-react**                | Ícones modernos, leves e flexíveis para UI.                                                       |
| **@tanstack/react-query**       | Fetch, cache e sincronização de dados assíncronos.                                                |
| **@tanstack/react-table**       | Tabelas poderosas, customizáveis e performáticas.                                                 |
| **react-hook-form**             | Formulários performáticos com controle total.                                                     |
| **zod**                         | Schema validation segura e tipada para formulários.                                               |
| **@radix-ui**                   | Componentes acessíveis e sofisticados para UI complexa.                                           |
| **next-themes**                 | Controle de temas (dark/light) com integração simples ao Next.js.                                 |
| **tailwind-merge**              | Evita conflitos e duplicações de classes Tailwind.                                                |
| **tw-animate-css**              | Animações compatíveis e integradas ao Tailwind CSS.                                               |
| **eslint + eslint-config-next** | Análise estática de código e padrões da equipe Next.js.                                           |
| **biome**                       | Linter + formatter moderno (substituto leve do ESLint + Prettier).                               |
| **TypeScript**                  | Tipagem estática para maior robustez, segurança e autocompletes inteligentes.                    |

---

## 📦 Instalação

```bash
git clone https://github.com/e17gomes/trycess.git
cd trycess

# Instale as dependências
pnpm install
# ou: yarn install / npm install
```

---

## ▶ Como Rodar

### 🧪 Ambiente de Desenvolvimento

```bash
pnpm dev
# ou: npm run dev / yarn dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

### 🚀 Produção

```bash
pnpm build
pnpm start
# ou: npm run build / yarn build
```

---

## 📋 Campos do Produto

- **Nome**: obrigatório  
- **Descrição**: obrigatória  
- **Preço**: número positivo, aceita decimais  
- **Estoque**: número inteiro, mínimo 0  
- **Imagem**: opcional (texto ou URL)  
- **Categoria**: obrigatória  

> Validados com **Zod** + **React Hook Form**

---

## 🧱 Estrutura e Decisões

- 🔁 React Query para controle e cache de dados  
- ⚙️ Context API para autenticação e tema  
- 🧩 Componentes reutilizáveis (botões, modais, etc.)  
- ✅ Validações robustas com Zod  
- ⚡ Turbopack para hot reload e build rápidos  
- 🎯 Biome para linting e formatação integrados  

---

## 🌟 Funcionalidades Extras

- 👤 Página de Usuário  
- 📝 Página de Registro (para futuras integrações)  
- 🔍 Filtro de produtos por nome  
- 🌓 Alternância de tema (dark/light mode)  
- 🔎 Modal com zoom da imagem do produto  
- 📄 Paginação de tabela  

---

## 🔧 Scripts Úteis

```bash
pnpm dev       # Inicia o ambiente de desenvolvimento
pnpm build     # Gera a build de produção
pnpm start     # Roda o projeto em modo produção
pnpm lint      # Análise de código com Biome/ESLint
pnpm format    # Formata o código com Biome
```

---

## 📄 Licença

Este projeto está licenciado sob a **MIT License**.

---

## 👨‍💻 Autor

Feito com ❤️ por [@e17gomes](https://github.com/e17gomes)