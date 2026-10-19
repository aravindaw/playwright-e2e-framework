import { Locator, Page } from '@playwright/test';
import { BasePage } from '@pageObjects/base.page';
import { PageEnum } from '@enums/pageEnum';

export class SingleSelectPage extends BasePage {
  protected readonly path = PageEnum.SINGLE_SELECT_PAGE;
  readonly select: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    super(page, 'SingleSelectPage');
    this.select = page.getByLabel('Choose language');
    this.submitButton = page.getByRole('button', { name: 'Submit' });
  }

  async chooseAndSubmit(language: string): Promise<void> {
    await this.select.selectOption({ label: language });
    await this.submitButton.click();
  }
}
