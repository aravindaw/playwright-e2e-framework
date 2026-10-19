import path from 'node:path';
import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from '@pageObjects/base.page';
import { PageEnum } from '@enums/pageEnum';
import { PracticeFormData } from '@testData/practiceForm.data';

export class PracticeFormPage extends BasePage {
  protected readonly path = PageEnum.PRACTICE_FORM_PAGE;
  protected readonly headingLocator = 'h5.mb-3';

  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly email: Locator;
  readonly mobile: Locator;
  readonly address: Locator;
  readonly stateDropdown: Locator;
  readonly pictureInput: Locator;
  readonly submitButton: Locator;
  readonly confirmation: Locator;

  constructor(page: Page) {
    super(page, 'PracticeFormPage');
    this.firstName = page.locator('#firstName');
    this.lastName = page.locator('#lastName');
    this.email = page.locator('#userEmail');
    this.mobile = page.locator('#userNumber');
    this.address = page.locator('#currentAddress');
    this.stateDropdown = page.locator('#div_id_state .custom-dropdown');
    this.pictureInput = page.locator('#uploadPicture');
    this.submitButton = page.locator('#submit-id-submit');
    this.confirmation = page.locator('.modal.show');
  }

  async fill(data: PracticeFormData): Promise<void> {
    await this.firstName.fill(data.firstName);
    await this.lastName.fill(data.lastName);
    if (data.email) await this.email.fill(data.email);
    await this.page.getByLabel(data.gender, { exact: true }).check();
    await this.mobile.fill(data.mobile);
    for (const hobby of data.hobbies ?? []) {
      await this.page.getByLabel(hobby, { exact: true }).check();
    }
    if (data.address) await this.address.fill(data.address);
    if (data.state) await this.selectState(data.state);
    if (data.picture) await this.upload(data.picture);
  }

  async selectState(state: string): Promise<void> {
    await this.stateDropdown.locator('.custom-dropdown-control').click();
    await this.stateDropdown.locator('.custom-dropdown-option', { hasText: state }).click();
    await expect(this.stateDropdown.locator('.selected-value')).toHaveText(state);
  }

  async upload(fileName: string): Promise<void> {
    await this.pictureInput.setInputFiles(path.resolve(__dirname, '../../test_data', fileName));
  }

  async submit(): Promise<void> {
    await this.submitButton.click();
  }

  async assertSubmitted(rows: Record<string, string>): Promise<void> {
    await expect(this.confirmation).toContainText('Thanks for submitting the form');
    for (const [label, value] of Object.entries(rows)) {
      await expect(this.confirmation.getByRole('row', { name: label })).toContainText(value);
    }
  }

  async assertNotSubmitted(): Promise<void> {
    await expect(this.confirmation).toHaveCount(0);
  }
}
