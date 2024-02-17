import { test, expect } from '@playwright/test';

test('donation form', async ({ page }) => {
  await page.goto('/');

  await page.getByLabel('I can donate').fill('51.32');
  await page.getByTestId('nextMonthButton').click();
  await page.getByText('Continue').click();

  await expect(page.getByTestId('donationTotalAmount')).toHaveText('$102.64');
  await expect(page.getByTestId('donationAmount')).toHaveText('$51.32');
});
