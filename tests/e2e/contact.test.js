const { test, expect } = require('@playwright/test');

test('Перевірка заголовка сторінки', async ({ page }) => {
  await page.goto('/contact.html');
  await expect(page).toHaveTitle(/Contact Page/);
});

test('Відправка форми успішна', async ({ page }) => {
  await page.goto('/contact.html');
  await page.fill('#name', 'Test User');
  await page.fill('#email', 'test@example.com');
  await page.fill('#message', 'Привіт, це тест!');
  await page.click('button[type="submit"]');
  await expect(page.locator('#thankYou')).toBeVisible();
});

test('Перевірка обов’язкових полів', async ({ page }) => {
  await page.goto('/contact.html');
  await page.click('button[type="submit"]');
  const invalid = await page.evaluate(() => document.querySelector(':invalid'));
  expect(invalid).not.toBeNull();
});

test('Перевірка textarea', async ({ page }) => {
  await page.goto('/contact.html');
  const textarea = page.locator('#message');
  await textarea.fill('Тестове повідомлення');
  await expect(textarea).toHaveValue('Тестове повідомлення');
});

test('Перевірка мобільного відображення заголовка', async ({ page }) => {
  await page.goto('/contact.html');
  const h1 = page.locator('h1');
  await expect(h1).toBeVisible();
});
