import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { StorePage } from '../pages/StorePage';

test.describe('Login Tests', () => {
    test('Valid login should navigate to store page', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await loginPage.login('validUser', 'validPassword');

        const storePage = new StorePage(page);
        expect(await storePage.validateUserLoggedIn()).toBeTruthy();
    });

    test('Invalid login should show error message', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await loginPage.login('invalidUser', 'invalidPassword');

        const errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage).toContain('Invalid credentials');
    });
});
