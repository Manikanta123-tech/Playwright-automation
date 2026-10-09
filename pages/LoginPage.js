class LoginPage {

    constructor(page) {
        this.page = page;

        this.username = page.locator('input[name="username"]');
        this.password = page.locator('input[name="password"]');

        // IMPORTANT: There is a space between Log and In.
        this.loginButton = page.locator('input[value="Log In"]');

        this.registerLink = page.getByText('Register');
        this.forgotLoginLink = page.getByText('Forgot login info?');
    }

    async open() {
        await this.page.goto('/parabank/index.htm');
    }

    async login(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
}

module.exports = { LoginPage };
