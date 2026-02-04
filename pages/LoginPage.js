export class LoginPage {
  constructor(page) {
    this.page = page;

    // =========================
    // Elementos da tela de login
    // =========================

    // Campo de usuário
    this.usernameInput = '#user-name';

    // Campo de senha
    this.passwordInput = '#password';

    // Botão de login
    this.loginButton = '#login-button';

    // Mensagem de erro exibida em falhas de login
    this.errorMessage = this.page.locator('[data-test="error"]');

    // Campo de usuário (usado para validar que a tela de login está visível)
    this.usernameField = this.page.locator('#user-name');

    // =========================
    // Elementos do logout
    // =========================

    // Botão do menu lateral (hambúrguer)
    this.menuButton = '#react-burger-menu-btn';

    // Botão de logout dentro do menu
    this.logoutButton = '#logout_sidebar_link';
  }

  // Acessa a página inicial (login)
  async goto() {
    await this.page.goto('/');
  }

  // Realiza o login informando usuário e senha
  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  // Executa o logout do sistema
  async logout() {
    // Abre o menu lateral
    await this.page.click(this.menuButton);

    // Clica na opção logout
    await this.page.click(this.logoutButton);
  }

  // Valida se a tela de login está visível novamente
  async isLoginPageVisible() {
    // Aguarda o campo de usuário aparecer na tela
    await this.usernameField.waitFor({ state: 'visible' });
  }
}
