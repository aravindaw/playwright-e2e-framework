import { Locator, Page } from '@playwright/test';
import { BasePage } from '@pageObjects/base.page';
import { PageEnum } from '@enums/pageEnum';

export class TextInputPage extends BasePage {
  protected readonly path = PageEnum.TEXT_INPUT_PAGE;
  readonly input: Locator;

  constructor(page: Page) {
    super(page, 'TextInputPage');
    this.input = page.getByRole('textbox', { name: 'Text string' });
  }

  async submit(value: string): Promise<void> {
    await this.input.fill(value);
    await this.input.press('Enter');
  }
}
