import { test, expect } from '@fixture/pages.fixture';
import { textAreaData } from '@testData/elements.data';

test.describe('Text area', () => {
  test('@SMOKE submits text', async ({ textAreaPage }) => {
    await textAreaPage.open();
    await textAreaPage.submit(textAreaData.single);
    await textAreaPage.assertResult(textAreaData.single);
  });

  test('@REGRESSION submits multi-line text', async ({ textAreaPage }) => {
    await textAreaPage.open();
    await textAreaPage.submit(textAreaData.valid);
    await textAreaPage.assertResult(textAreaData.valid);
  });

  test('@REGRESSION does not submit an empty text area', async ({ textAreaPage }) => {
    await textAreaPage.open();
    await textAreaPage.submitButton.click();
    await expect(textAreaPage.result).toBeHidden();
  });
});
