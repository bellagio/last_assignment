import { Page } from '@playwright/test';

export class StorePage {
    goto(arg0: string) {
        throw new Error('Method not implemented.');
    }
    navigate() {
        throw new Error('Method not implemented.');
    }
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async validateUserLoggedIn() {
        return this.page.isVisible('text=Welcome');
    }

    async getStoreItems() {
        return this.page.locator('.store-item');
    }
}
