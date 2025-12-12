const { test, expect } = require('@playwright/test');

test('Перевірка заголовка сторінки', async ({ page }) => {
  await page.goto('/contact.html');
  // Змінено очікуваний заголовок на неправильний
  await expect(page).toHaveTitle(/Wrong Title/);
});

test('Відправка форми успішна', async ({ page }) => {
  await page.goto('/contact.html');
  await page.fill('#name', 'Test User');
  await page.fill('#email', 'test@example.com');
  await page.fill('#message', 'Привіт, це тест!');
  await page.click('button[type="submit"]');
  // Змінено локатор на неіснуючий
  await expect(page.locator('#thankYouMissing')).toBeVisible();
});

test('Перевірка обов’язкових полів', async ({ page }) => {
  await page.goto('/contact.html');
  await page.click('button[type="submit"]');
  const invalid = await page.evaluate(() => document.querySelector(':invalid'));
  // Намисно робимо перевірку неправильною
  expect(invalid).toBeNull();
});

test('Перевірка textarea', async ({ page }) => {
  await page.goto('/contact.html');
  const textarea = page.locator('#message');
  await textarea.fill('Тестове повідомлення');
  // Змінено очікуване значення
  await expect(textarea).toHaveValue('Неправильне значення');
});

test('Перевірка мобільного відображення заголовка', async ({ page }) => {
  await page.goto('/contact.html');
  const h1 = page.locator('h1');
  // Намисно перевіряємо неіснуючий елемент
  await expect(page.locator('h2')).toBeVisible();
});
