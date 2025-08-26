const { test, expect } = require('@playwright/test');
const path = require('path');

// Basic test to ensure the demo page shows the login interface

test('shows login form', async ({ page }) => {
  const filePath = path.resolve(__dirname, '../index.html');
  await page.goto('file://' + filePath);
  await expect(page.getByRole('heading', { name: 'Anmeldung' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});
