import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { sauceUsers, saucePassword } from '../../helpers/LoginSauceDemo';

// Agrupamento de todos os cenários relacionados ao login no SauceDemo
test.describe('Login - SauceDemo', () => {

  // Cenário: login com usuário padrão (standard_user)
  test('Login com usuário padrão', async ({ page }) => {

    // Instancia a Page Object responsável pela tela de login
    const loginPage = new LoginPage(page);

    // Acessa a página de login do SauceDemo
    await loginPage.goto();

    // Realiza o login informando usuário padrão e senha válida
    await loginPage.login(sauceUsers.padrao, saucePassword);

    // Valida se o usuário foi redirecionado para a página de inventário
    await expect(page).toHaveURL(/inventory/);
  });

  // Cenário: login com usuário bloqueado (locked_out_user)
  test('Login com usuário bloqueado deve exibir erro', async ({ page }) => {

    // Instancia a Page Object da tela de login
    const loginPage = new LoginPage(page);

    // Acessa a página de login
    await loginPage.goto();

    // Tenta realizar login com um usuário bloqueado
    await loginPage.login(sauceUsers.bloqueado, saucePassword);

    // Valida que a mensagem de erro é exibida
    await expect(loginPage.errorMessage).toBeVisible();

    // Valida o texto da mensagem de erro
    await expect(loginPage.errorMessage)
      .toContainText('Sorry, this user has been locked out');
  });

  // Agrupamento de cenários para usuários válidos "especiais"
  test.describe('Usuários válidos especiais', () => {

    // Lista de usuários que devem conseguir logar com sucesso
    const usuariosValidos = [
      { nome: 'problem', user: sauceUsers.problema },
      { nome: 'performance', user: sauceUsers.performance },
      { nome: 'error', user: sauceUsers.erro },
      { nome: 'visual', user: sauceUsers.visual }
    ];

    // Cria dinamicamente um teste para cada usuário
    for (const { nome, user } of usuariosValidos) {

      test(`Login com usuário ${nome}`, async ({ page }) => {

        // Instancia a Page Object da tela de login
        const loginPage = new LoginPage(page);

        // Acessa a página de login
        await loginPage.goto();

        // Realiza login com o usuário da vez
        await loginPage.login(user, saucePassword);

        // Valida que o login foi bem-sucedido
        await expect(page).toHaveURL(/inventory/);
      });
    }
  });

  // Cenário: login com usuário padrão e logout
  test('Login com usuário padrão e realizar logout', async ({ page }) => {

  // Instancia a Page Object responsável pela tela de login
  // Essa classe encapsula ações e elementos da página
  const loginPage = new LoginPage(page);

  // Acessa a página inicial do sistema (tela de login)
  await loginPage.goto();

  // Realiza o login utilizando o usuário padrão e senha válida
  await loginPage.login(sauceUsers.padrao, saucePassword);

  // Valida que o login foi realizado com sucesso
  // Confirmando o redirecionamento para a página de inventário
  await expect(page).toHaveURL(/inventory/);

  // Executa o logout através do menu lateral
  await loginPage.logout();

  // Valida que, após o logout, o usuário foi redirecionado
  // novamente para a tela de login
  await expect(page).toHaveURL(/saucedemo\.com\/$/);

  // Valida que a tela de login está visível novamente
  // sem que o teste precise conhecer o ID do campo
  await loginPage.isLoginPageVisible();
});


});
