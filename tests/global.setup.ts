import {test as setup} from "@playwright/test";
import {LoginPage} from "../pages/LoginPage";
import {DashboardPage} from "../pages/DashboardPage";

setup('login', async ({page}) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    await loginPage.goto();
    await loginPage.login(process.env.LOGIN, process.env.PASSWORD);
    await dashboardPage.assertDashboardPageIsOpened();

    await page.context().storageState({path: "./loginAuth.json"});
});
