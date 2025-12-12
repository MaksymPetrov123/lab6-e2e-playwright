const { test, expect } = require('@playwright/test');

test('Скріншот всієї сторінки', async ({ page }) => {
  await page.goto('/');
  expect(await page.screenshot()).toMatchSnapshot('local-page.png');
});

test('Скріншот заголовка h1', async ({ page }) => {
  await page.goto('/');
  const h1 = page.locator('h1');
  expect(await h1.screenshot()).toMatchSnapshot('local-h1.png');
});
