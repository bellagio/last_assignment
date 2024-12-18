import { test, expect, request } from '@playwright/test';

// No Page Object Model is used here, as this is directly testing the API.
test('API login test', async () => {
    const apiContext = await request.newContext();
    const response = await apiContext.post('https://hoff.is/api/login', {
        data: {
            username: 'validUser',
            password: 'validPassword'
        }
    });

    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('token');
});
