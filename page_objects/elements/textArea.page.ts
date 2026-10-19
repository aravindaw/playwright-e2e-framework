import { Locator, Page } from '@playwright/test';
import { BasePage } from '@pageObjects/base.page';
import { PageEnum } from '@enums/pageEnum';

export class TextAreaPage extends BasePage {
  protected readonly path = PageEnum.TEXT_AREA_PAGE;
  readonly textArea: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    super(page, 'TextAreaPage');
    this.textArea = page.getByRole('textbox', { name: 'Text area' });
    this.submitButton = page.getByRole('button', { name: 'Submit' });
  }

  async submit(text: string): Promise<void> {
    await this.textArea.fill(text);
    await this.submitButton.click();
  }
}
