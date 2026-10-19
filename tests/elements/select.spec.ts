import { test, expect } from '@fixture/pages.fixture';
import { selectData } from '@testData/elements.data';

test.describe('Single select', () => {
  test(`@SMOKE selects ${selectData.languages[0]}`, async ({ singleSelectPage }) => {
    await singleSelectPage.open();
    await singleSelectPage.chooseAndSubmit(selectData.languages[0]);
    await singleSelectPage.assertResult(selectData.languages[0]);
  });

  for (const language of selectData.languages.slice(1)) {
    test(`@REGRESSION selects ${language}`, async ({ singleSelectPage }) => {
      await singleSelectPage.open();
      await singleSelectPage.chooseAndSubmit(language);
      await singleSelectPage.assertResult(language);
    });
  }

  test('@REGRESSION does not submit without choosing a language', async ({ singleSelectPage }) => {
    await singleSelectPage.open();
    await singleSelectPage.submitButton.click();
    await expect(singleSelectPage.result).toBeHidden();
  });
});
