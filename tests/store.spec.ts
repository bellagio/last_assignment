import { test, expect } from '@playwright/test';
import { StorePage } from '../pages/StorePage';

test.describe('Store Page Tests', () => {
    test('Add item to cart and verify cart total', async ({ page }) => {
        const storePage = new StorePage(page);
        await storePage.goto('https://hoff.is/store');  // Assuming store URL is accessible.

        const items = storePage.getStoreItems();
        const itemCount = await (await items).count();
        expect(itemCount).toBeGreaterThan(0);

        // Add first item to the cart
        await (await items).first().click();
        await page.click('button.add-to-cart');

        // Verify cart total (Assuming a cart summary section is visible)
        const cartTotal = await page.textContent('.cart-total');
        expect(cartTotal).toMatch(/\d+\.\d{2}/); // Example: Cart total like "10.99"
    });
});