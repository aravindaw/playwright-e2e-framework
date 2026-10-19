import { Locator, Page } from '@playwright/test';
import { BasePage } from '@pageObjects/base.page';
import { PageEnum } from '@enums/pageEnum';

export class EmailInputPage extends BasePage {
  protected readonly path = PageEnum.EMAIL_INPUT_PAGE;
  readonly input: Locator;
  readonly error: Locator;

  constructor(page: Page) {
    super(page, 'EmailInputPage');
    this.input = page.getByRole('textbox', { name: 'Email' });
    this.error = page.locator('.invalid-feedback, .alert-danger').first();
  }

  async submit(value: string): Promise<void> {
    await this.input.fill(value);
    await this.input.press('Enter');
  }
}
