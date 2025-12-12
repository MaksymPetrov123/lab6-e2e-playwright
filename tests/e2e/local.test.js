const { test, expect } = require('@playwright/test');

test('Перевірка форми входу', async ({ page }) => {
  await page.goto('/');
  await page.fill('#username', 'test_user');
  await page.fill('#password', 'password123');
  await page.click('#loginButton');
  await expect(page.locator('#successMessage')).toBeVisible();
});

test('Перевірка заголовка сторінки', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Локальна сторінка/);
});

test('Валідація обов’язкових полів', async ({ page }) => {
  await page.goto('/');
  await page.click('#loginButton');
  const invalid = await page.evaluate(() => document.querySelector(':invalid'));
  expect(invalid).not.toBeNull();
});
