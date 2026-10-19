import { test, expect } from '@fixture/pages.fixture';
import { emailInputData, textInputData } from '@testData/elements.data';

test.describe('Input fields', () => {
  test('@SMOKE submits a text string', async ({ textInputPage }) => {
    await textInputPage.open();
    await textInputPage.submit(textInputData.valid);
    await textInputPage.assertResult(textInputData.valid);
  });

  for (const [name, value] of Object.entries({
    'too short': textInputData.tooShort,
    'too long': textInputData.tooLong,
    'containing invalid characters': textInputData.invalidChars,
  })) {
    test(`@REGRESSION rejects a text string ${name}`, async ({ textInputPage }) => {
      await textInputPage.open();
      await textInputPage.submit(value);
      await expect(textInputPage.result).toBeHidden();
    });
  }

  test('@REGRESSION requires a value for the text field', async ({ textInputPage, page }) => {
    await textInputPage.open();
    await textInputPage.input.press('Enter');
    await expect(textInputPage.result).toBeHidden();
    await expect(page).toHaveURL(/\/elements\/input\/simple/);
  });

  test('@SMOKE submits a valid email', async ({ emailInputPage }) => {
    await emailInputPage.open();
    await emailInputPage.submit(emailInputData.valid);
    await emailInputPage.assertResult(emailInputData.valid);
  });

  test('@REGRESSION rejects an invalid email', async ({ emailInputPage }) => {
    await emailInputPage.open();
    await emailInputPage.submit(emailInputData.invalid);
    await expect(emailInputPage.result).toBeHidden();
    await expect(emailInputPage.error).toBeVisible();
  });
});
