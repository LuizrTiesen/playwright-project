Playwright Project

Projeto base de automação de testes utilizando Playwright com JavaScript, seguindo uma arquitetura profissional, organizada e de fácil manutenção.

Este projeto foi criado para facilitar a criação, manutenção e escalabilidade de testes automatizados, seguindo boas práticas de QA.

==================================================

Tecnologias utilizadas

Node.js
Playwright
JavaScript
dotenv (variáveis de ambiente)

==================================================

Estrutura do projeto

playwright-project/
├── helpers/            # Dados e utilidades compartilhadas
│   └── LoginSauceDemo.js
│
├── pages/              # Page Objects (ações e elementos das telas)
│   └── LoginPage.js
│
├── tests/
│   └── specs/          # Arquivos de teste
│       └── login.spec.js
│
├── playwright.config.js # Configuração global do Playwright
├── .env                # Variáveis de ambiente
├── package.json
└── README.md


==================================================

Pré-requisitos

Node.js instalado (recomendado versão LTS)
NPM instalado

Verificar versões instaladas:

node -v
npm -v

==================================================

Instalação do projeto

Instalar as dependências do projeto

Na raiz do projeto, execute:

npm install

Instalar os navegadores utilizados pelo Playwright

npx playwright install

Instalar suporte para variáveis de ambiente

npm install dotenv

==================================================

Variáveis de ambiente

Criar um arquivo .env na raiz do projeto com o conteúdo abaixo:

BASE_URL=https://www.saucedemo.com

USUARIO_PADRAO=standard_user
USUARIO_BLOQUEADO=locked_out_user
USUARIO_COM_PROBLEMA=problem_user
USUARIO_COM_FALHA_DE_DESEMPENHO=performance_glitch_user
USUARIO_COM_ERRO=error_user
USUARIO_VISUAL=visual_user

PASSWORD_SAUCEDEMO=secret_sauce

==================================================

Como rodar os testes

Rodar todos os testes em modo headless:

npx playwright test

Rodar os testes com navegador visível:

npx playwright test --headed

Abrir o relatório HTML gerado pelo Playwright:

npx playwright show-report

==================================================

Como criar novos testes

Criar um novo arquivo dentro do diretório:

tests/specs

Exemplo de nome de arquivo:

produto.spec.js

Os testes devem:

Representar o comportamento do usuário

Utilizar Page Objects

Não acessar IDs ou seletores diretamente

==================================================

Para que servem os Pages (Page Objects)

Diretório: pages

Os Pages representam as telas do sistema e encapsulam os detalhes da interface.

Responsabilidades dos Pages:

Centralizar seletores (IDs, data-test, classes)

Executar ações do usuário (login, logout, cliques, preenchimentos)

Expor estados da tela para validações nos testes

Exemplos de uso:
loginPage.login(usuario, senha)
loginPage.logout()
loginPage.isLoginPageVisible()

Se algum seletor mudar, apenas o Page Object precisa ser ajustado.

==================================================

Para que servem os Helpers

Diretório: helpers

Os Helpers são responsáveis por armazenar dados e utilidades reutilizáveis.

Responsabilidades dos Helpers:

Centralizar dados de teste

Evitar valores hardcoded nos testes

Facilitar reutilização de informações

Exemplos:
sauceUsers.padrao
saucePassword

==================================================

Para que serve o playwright.config.js

Arquivo responsável por configurar o comportamento global do Playwright no projeto.

Exemplos do que é configurado nesse arquivo:

Diretório dos testes

Base URL

Execução headless ou headed

Screenshots em falha

Gravação de vídeo

Retries

Relatórios

Toda configuração global do projeto deve ficar nesse arquivo.

==================================================

Boas práticas adotadas

Testes não conhecem detalhes de implementação da UI

Seletores ficam apenas nos Pages

Dados ficam nos Helpers

Código organizado, comentado e legível

Arquitetura preparada para crescimento do projeto

==================================================
