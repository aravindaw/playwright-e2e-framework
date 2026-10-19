import { Locator, Page } from '@playwright/test';
import { BasePage } from '@pageObjects/base.page';
import { PageEnum } from '@enums/pageEnum';

export type ButtonState = 'enabled' | 'disabled';

export class DisabledButtonPage extends BasePage {
  protected readonly path = PageEnum.DISABLED_BUTTON_PAGE;
  readonly stateSelect: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    super(page, 'DisabledButtonPage');
    this.stateSelect = page.locator('#id_select_state');
    this.submitButton = page.getByRole('button', { name: 'Submit' });
  }

  async setButtonState(state: ButtonState): Promise<void> {
    await this.stateSelect.selectOption(state);
  }

  async submit(): Promise<void> {
    await this.submitButton.click();
  }
}
