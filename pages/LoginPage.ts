import { Page } from '@playwright/test';

export class LoginPage {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://hoff.is/login');
    }

    async login(username: string, password: string) {
        await this.page.fill('input[name="username"]', username);
        await this.page.fill('input[name="password"]', password);
        await this.page.click('button[type="submit"]');
    }

    async getErrorMessage() {
        return this.page.textContent('.error-message');
    }
}