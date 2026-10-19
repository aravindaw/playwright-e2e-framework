import { test as base } from '@playwright/test';
import { HomePage } from '@pageObjects/home.page';
import { TextInputPage } from '@pageObjects/elements/textInput.page';
import { EmailInputPage } from '@pageObjects/elements/emailInput.page';
import { SimpleButtonPage } from '@pageObjects/elements/simpleButton.page';
import { LikeAButtonPage } from '@pageObjects/elements/likeAButton.page';
import { DisabledButtonPage } from '@pageObjects/elements/disabledButton.page';
import { SingleSelectPage } from '@pageObjects/elements/singleSelect.page';
import { SingleCheckboxPage } from '@pageObjects/elements/singleCheckbox.page';
import { TextAreaPage } from '@pageObjects/elements/textArea.page';
import { PracticeFormPage } from '@pageObjects/forms/practiceForm.page';

type Pages = {
  homePage: HomePage;
  textInputPage: TextInputPage;
  emailInputPage: EmailInputPage;
  simpleButtonPage: SimpleButtonPage;
  likeAButtonPage: LikeAButtonPage;
  disabledButtonPage: DisabledButtonPage;
  singleSelectPage: SingleSelectPage;
  singleCheckboxPage: SingleCheckboxPage;
  textAreaPage: TextAreaPage;
  practiceFormPage: PracticeFormPage;
};

export const test = base.extend<Pages>({
  homePage: async ({ page }, use) => use(new HomePage(page)),
  textInputPage: async ({ page }, use) => use(new TextInputPage(page)),
  emailInputPage: async ({ page }, use) => use(new EmailInputPage(page)),
  simpleButtonPage: async ({ page }, use) => use(new SimpleButtonPage(page)),
  likeAButtonPage: async ({ page }, use) => use(new LikeAButtonPage(page)),
  disabledButtonPage: async ({ page }, use) => use(new DisabledButtonPage(page)),
  singleSelectPage: async ({ page }, use) => use(new SingleSelectPage(page)),
  singleCheckboxPage: async ({ page }, use) => use(new SingleCheckboxPage(page)),
  textAreaPage: async ({ page }, use) => use(new TextAreaPage(page)),
  practiceFormPage: async ({ page }, use) => use(new PracticeFormPage(page)),
});

export { expect } from '@playwright/test';
