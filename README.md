TRYCESS - Gerenciador de Produtos

Projeto criado com Next.js + Tailwind CSS para gerenciar produtos de forma simples e eficiente.  
Utiliza tecnologias modernas para garantir performance, escalabilidade e uma ótima experiência de desenvolvimento.

---

Tecnologias e Porquês

| Tecnologia                      | Propósito / Justificativa                                                                               |
| ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| **Next.js (v15.4.1)**           | Framework React para SSR/SSG, otimizações nativas, rotas simplificadas, Turbopack para dev mais rápido. |
| **React (v19.1.0)**             | Biblioteca principal para construir UI reativas e componentes.                                          |
| **Tailwind CSS (v4)**           | Framework utilitário para estilização rápida, responsiva e customizável.                                |
| **Lucide-react**                | Biblioteca de ícones moderna, leve e flexível para UI.                                                  |
| **@tanstack/react-query**       | Gerenciamento de estado assíncrono e cache de dados da API (fetching).                                  |
| **@tanstack/react-table**       | Biblioteca para tabelas poderosas, personalizáveis e performáticas.                                     |
| **react-hook-form**             | Facilita a criação e validação de formulários com performance otimizada.                                |
| **zod**                         | Validação de schemas para garantir integridade e segurança dos dados.                                   |
| **@radix-ui**                   | Componentes acessíveis e prontos para UI complexa (Dialog, Dropdown).                                   |
| **next-themes**                 | Controle de temas (dark/light) de forma simples e integrada ao Next.js.                                 |
| **eslint + eslint-config-next** | Análise estática para manter a qualidade e padrões no código.                                           |
| **tailwind-merge**              | Mescla classes Tailwind evitando conflitos e duplicações.                                               |
| **tw-animate-css**              | Biblioteca para animações CSS compatíveis com Tailwind.                                                 |
| **typescript**                  | Tipagem estática para maior segurança e robustez do código.                                             |

---

Como instalar

1. Clone o repositório:

git clone https://github.com/e17gomes/trycess.git
cd trycess

2. Instale as dependências:

npm install

# ou

yarn

# ou

pnpm install

---

Como rodar a aplicação

Para rodar o ambiente de desenvolvimento com Turbopack (mais rápido):

npm run dev

# ou

yarn dev

# ou

pnpm dev

Acesse em: http://localhost:3000

Para build e produção:

npm run build
npm start

# ou yarn build e yarn start

---

Decisões importantes do projeto

Campos do Produto

- Nome: obrigatório, texto simples
- Descrição: obrigatório, texto para detalhar o produto
- Preço: número positivo, pode aceitar valores decimais
- Estoque: número inteiro, não negativo
- Imagem: opcional, texto
- Categoria: obrigatório, texto simples

Esses campos foram escolhidos para cobrir o básico de um sistema de gerenciamento de estoque e vendas, garantindo validação no frontend com zod e react-hook-form.

Estrutura do projeto

- Componentes (Botões, Cards) para reutilização
- Contexto para estado global (autenticação, tema)
- React Query para cache e sincronização dos dados do backend simulado
- Validações de formulário com Zod
- Uso do Turbopack para melhorar a experiência de desenvolvimento com Hot Module Replacement ultra rápida.

---

🌟 Feat's Adicionais

- Feat de pagina de usuáirio
- Feat de pagina de registro (para futuras integrações)
- Feat Zoom Image, quando clicada a imagem é aberta em um modal para melhor visualização.
- Feat Filtrar produto por nome
- Feat Alterar temas da aplicação (dark mode, ligth mode)
- Feat Paginação de tabela

Licença

MIT License

---

Feito com ❤️ por https://github.com/e17gomes
