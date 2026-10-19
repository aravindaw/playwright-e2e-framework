import { Locator, Page } from '@playwright/test';
import { BasePage } from '@pageObjects/base.page';
import { PageEnum } from '@enums/pageEnum';

export class SingleCheckboxPage extends BasePage {
  protected readonly path = PageEnum.SINGLE_CHECKBOX_PAGE;
  readonly checkbox: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    super(page, 'SingleCheckboxPage');
    this.checkbox = page.getByRole('checkbox');
    this.submitButton = page.getByRole('button', { name: 'Submit' });
  }

  async setChecked(checked: boolean): Promise<void> {
    await this.checkbox.setChecked(checked);
    await this.submitButton.click();
  }
}
