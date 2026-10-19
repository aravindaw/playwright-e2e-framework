import { test, expect } from '@fixture/pages.fixture';

test.describe('Single checkbox', () => {
  test('@SMOKE checked checkbox is submitted', async ({ singleCheckboxPage }) => {
    await singleCheckboxPage.open();
    await singleCheckboxPage.setChecked(true);
    await singleCheckboxPage.assertResult('select me or not');
  });

  test('@REGRESSION unchecked checkbox shows no result', async ({ singleCheckboxPage }) => {
    await singleCheckboxPage.open();
    await singleCheckboxPage.setChecked(false);
    await expect(singleCheckboxPage.result).toBeHidden();
  });
});
