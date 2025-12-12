const { test, expect } = require('@playwright/test');

test('Перевірка заголовка Playwright.dev', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

test('Перевірка наявності навігації', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const nav = page.locator('nav');
  await expect(nav).toBeVisible();
});

test('Перехід на сторінку Get started', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.click('text=Get started');
  await expect(page).toHaveURL(/docs\/intro/);
});
