import { test, expect } from '@playwright/test';
import { StorePage } from '../pages/StorePage';

test.describe('Logout Tests', () => {
    test('Log out should redirect to login page', async ({ page }) => {
        const storePage = new StorePage(page);
        await storePage.navigate();  // Assuming this navigates to a page where the user is already logged in.

        // Log out action (assuming a logout button exists)
        await page.click('button.logout');

        // Verify redirection to login page
        expect(page.url()).toBe('https://hoff.is/login');
    });
});