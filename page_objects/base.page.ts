import { expect, Locator, Page } from '@playwright/test';

export abstract class BasePage {
  protected page: Page;
  protected abstract readonly path: string;

  protected readonly headingLocator: string = 'h1';
  readonly result: Locator;

  constructor(page: Page, pageName: string) {
    if (!page) {
      throw new Error(`${pageName} instance is required`);
    }
    this.page = page;
    this.result = page.locator('#result-text');
  }

  get heading(): Locator {
    return this.page.locator(this.headingLocator);
  }

  async open(): Promise<void> {
    await this.page.goto(this.path);
    await this.assertOnPage();
  }

  async assertOnPage(): Promise<void> {
    await expect(this.page).toHaveURL(this.path);
    await expect(this.heading).toBeVisible();
  }

  async assertHeading(expected: string): Promise<void> {
    await expect(this.heading).toHaveText(expected);
  }

  async assertResult(expected: string): Promise<void> {
    await expect(this.result).toHaveText(expected);
  }
}
