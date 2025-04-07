import { Browser, chromium, Page } from "@playwright/test";
import { LoginPage } from "./pages/login.page";
import { DashboardPage } from "./pages/dashboard.page";

async function globalSetup() {
  const browser: Browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page: Page = await context.newPage();
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  await loginPage.goto();
  await loginPage.login(process.env.LOGIN, process.env.PASSWORD);
  await dashboardPage.assertDashboardPageIsOpened();

  await page.context().storageState({ path: "./loginAuth.json" });

  await browser.close();
}

export default globalSetup;
