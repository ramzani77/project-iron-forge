import { test, expect } from '@playwright/test';

test('Verify Playwright homepage title', async ({ page }) => {

  // Arrange
  await page.goto('https://playwright.dev/');

  // Assert
  await expect(page).toHaveTitle(/Playwright/);

});