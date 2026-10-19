import { Locator, Page } from '@playwright/test';
import { BasePage } from '@pageObjects/base.page';
import { PageEnum } from '@enums/pageEnum';

export class SimpleButtonPage extends BasePage {
  protected readonly path = PageEnum.SIMPLE_BUTTON_PAGE;
  readonly clickButton: Locator;

  constructor(page: Page) {
    super(page, 'SimpleButtonPage');
    this.clickButton = page.getByRole('button', { name: 'Click' });
  }

  async click(): Promise<void> {
    await this.clickButton.click();
  }
}
