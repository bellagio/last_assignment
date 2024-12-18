import { test, expect } from '@playwright/test';

// Accessibility testing does not require Page Object Model.
test('Accessibility snapshot for login page', async ({ page }) => {
    await page.goto('https://hoff.is/login');

    const accessibilitySnapshot = await page.accessibility.snapshot();
    console.log(accessibilitySnapshot);
    expect(accessibilitySnapshot).toBeTruthy();
});
