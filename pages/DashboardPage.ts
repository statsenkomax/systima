import { expect, Page } from "@playwright/test";
import BasePage from "./BasePage";

export class DashboardPage extends BasePage{
  constructor(page: Page) {
    super(page);
  }

  public async goto() {
    await this.page.goto(process.env.BASE_URL + "systimaas7/dashboard");
  }

  public async assertDashboardPageIsOpened() {
    await this.page.waitForSelector(".dashboard-grid", { timeout: 25000 });
    expect(this.page.url()).toContain("/dashboard");
  }
}
