import { test, expect } from '@fixture/pages.fixture';

test.describe('Buttons', () => {
  test('@SMOKE clicking the button shows the result', async ({ simpleButtonPage }) => {
    await simpleButtonPage.open();
    await simpleButtonPage.click();
    await simpleButtonPage.assertResult('Submitted');
  });

  test('@REGRESSION clicking a link styled as a button shows the result', async ({ likeAButtonPage }) => {
    await likeAButtonPage.open();
    await likeAButtonPage.click();
    await likeAButtonPage.assertResult('Submitted');
  });

  test('@REGRESSION the button is disabled by default', async ({ disabledButtonPage }) => {
    await disabledButtonPage.open();
    await expect(disabledButtonPage.submitButton).toBeDisabled();
  });

  test('@REGRESSION the button can be enabled and then submitted', async ({ disabledButtonPage }) => {
    await disabledButtonPage.open();
    await disabledButtonPage.setButtonState('enabled');
    await expect(disabledButtonPage.submitButton).toBeEnabled();
    await disabledButtonPage.submit();
    await disabledButtonPage.assertResult('Submitted');
  });

  test('@REGRESSION the button can be disabled again after being enabled', async ({ disabledButtonPage }) => {
    await disabledButtonPage.open();
    await disabledButtonPage.setButtonState('enabled');
    await disabledButtonPage.setButtonState('disabled');
    await expect(disabledButtonPage.submitButton).toBeDisabled();
  });
});
