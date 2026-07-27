import { test, expect } from '@playwright/test';

test('Click Get Started using getByRole', async ({ page }) => {

  await page.goto('https://playwright.dev/');

  await page.getByRole('link', { name: 'Get started' }).click();

  await expect(page).toHaveURL(/docs/);


});

test('Verify Playwright text is visible', async ({ page }) => {

  await page.goto('https://playwright.dev/');

  await expect(
      page.getByText('Playwright enables reliable web automation')
  ).toBeVisible();

});

test('Verify heading is visible', async ({ page }) => {

  await page.goto('https://playwright.dev/');

  await expect(
      page.getByRole('heading', { name: /Playwright enables reliable web automation/ })
  ).toBeVisible();

});