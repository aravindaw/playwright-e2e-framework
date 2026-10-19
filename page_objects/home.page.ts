import { Locator, Page } from '@playwright/test';
import { BasePage } from '@pageObjects/base.page';
import { PageEnum } from '@enums/pageEnum';

export class HomePage extends BasePage {
  protected readonly path = PageEnum.HOME_PAGE;
  readonly navLinks: Locator;

  constructor(page: Page) {
    super(page, 'HomePage');
    this.navLinks = page.locator('a[href^="/elements/"]:visible');
  }

  async clickNavLink(href: string): Promise<void> {
    await this.navLinks.and(this.page.locator(`[href="${href}"]`)).first().click();
  }
}
