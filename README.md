# Playwright Project

Projeto base de automação de testes utilizando **Playwright com JavaScript**, seguindo uma arquitetura profissional, organizada e de fácil manutenção.

Este projeto foi criado para facilitar a criação, manutenção e escalabilidade de testes automatizados, seguindo boas práticas de QA.

---

## 🧰 Tecnologias Utilizadas

- Node.js  
- Playwright  
- JavaScript  
- dotenv (variáveis de ambiente)

---

## 📁 Estrutura do Projeto

```text
playwright-project/
├── helpers/             # Dados e utilidades compartilhadas
│   └── LoginSauceDemo.js
│
├── pages/               # Page Objects (ações e elementos das telas)
│   └── LoginPage.js
│
├── tests/
│   └── specs/           # Arquivos de teste
│       └── login.spec.js
│
├── playwright.config.js # Configuração global do Playwright
├── .env                 # Variáveis de ambiente
├── package.json
└── README.md
```

---

## ✅ Pré-requisitos

- Node.js instalado (recomendado versão LTS)
- NPM instalado

Verificar versões instaladas:

```bash
node -v
npm -v
```

---

## ⚙️ Instalação do Projeto

### Instalar dependências

Na raiz do projeto, execute:

```bash
npm install
```

### Instalar navegadores do Playwright

```bash
npx playwright install
```

### Instalar suporte a variáveis de ambiente

```bash
npm install dotenv
```

---

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com o conteúdo abaixo:

```env
BASE_URL=https://www.saucedemo.com

USUARIO_PADRAO=standard_user
USUARIO_BLOQUEADO=locked_out_user
USUARIO_COM_PROBLEMA=problem_user
USUARIO_COM_FALHA_DE_DESEMPENHO=performance_glitch_user
USUARIO_COM_ERRO=error_user
USUARIO_VISUAL=visual_user

PASSWORD_SAUCEDEMO=secret_sauce
```

---

## ▶️ Como Rodar os Testes

### Rodar todos os testes (headless)

```bash
npx playwright test
```

### Rodar testes com navegador visível

```bash
npx playwright test --headed
```

### Abrir relatório HTML

```bash
npx playwright show-report
```

---

## 🧪 Como Criar Novos Testes

1. Crie um novo arquivo dentro do diretório:
   ```
   tests/specs
   ```

2. Exemplo de nome:
   ```
   produto.spec.js
   ```

### Os testes devem:

- Representar o comportamento do usuário
- Utilizar Page Objects
- **Não acessar IDs ou seletores diretamente**

---

## 📄 Para que Servem os Pages (Page Objects)

📂 Diretório: `pages`

Os Pages representam as telas do sistema e encapsulam os detalhes da interface.

### Responsabilidades:

- Centralizar seletores (IDs, data-test, classes)
- Executar ações do usuário (login, logout, cliques, preenchimentos)
- Expor estados da tela para validações nos testes

### Exemplos de uso:

```js
loginPage.login(usuario, senha);
loginPage.logout();
loginPage.isLoginPageVisible();
```

Se algum seletor mudar, apenas o Page Object precisa ser ajustado.

---

## 🧩 Para que Servem os Helpers

📂 Diretório: `helpers`

Os Helpers armazenam dados e utilidades reutilizáveis.

### Responsabilidades:

- Centralizar dados de teste
- Evitar valores hardcoded
- Facilitar reutilização

### Exemplos:

```js
sauceUsers.padrao
saucePassword
```

---

## ⚙️ Para que Serve o playwright.config.js

Arquivo responsável por configurar o comportamento global do Playwright.

### Exemplos de configuração:

- Diretório dos testes
- Base URL
- Execução headless/headed
- Screenshots em falha
- Gravação de vídeo
- Retries
- Relatórios

Toda configuração global do projeto deve ficar nesse arquivo.

---

## ✅ Boas Práticas Adotadas

- Testes não conhecem detalhes da UI
- Seletores ficam apenas nos Pages
- Dados ficam nos Helpers
- Código limpo, organizado e legível
- Arquitetura preparada para crescimento 🚀
