import { test, expect } from '@fixture/pages.fixture';
import { PageEnum } from '@enums/pageEnum';

test.describe('Home page navigation', () => {
  test('@SMOKE home page lists the element sections', async ({ homePage }) => {
    await homePage.open();
    await expect(homePage.navLinks.first()).toBeVisible();
  });

  test('@REGRESSION navigates to the text input page', async ({ homePage, textInputPage }) => {
    await homePage.open();
    await homePage.clickNavLink(PageEnum.TEXT_INPUT_PAGE);
    await textInputPage.assertOnPage();
  });
});
