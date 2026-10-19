import { Locator, Page } from '@playwright/test';
import { BasePage } from '@pageObjects/base.page';
import { PageEnum } from '@enums/pageEnum';

export class LikeAButtonPage extends BasePage {
  protected readonly path = PageEnum.LIKE_A_BUTTON_PAGE;
  readonly clickLink: Locator;

  constructor(page: Page) {
    super(page, 'LikeAButtonPage');
    this.clickLink = page.getByRole('link', { name: 'Click', exact: true });
  }

  async click(): Promise<void> {
    await this.clickLink.click();
  }
}
