import {test as base} from "@playwright/test";
import {LoginPage} from "../pages/LoginPage";
import {DashboardPage} from "../pages/DashboardPage";
import {FakturadetaljerPage} from "../pages/FakturadetaljerPage";
import {ContactPage} from "../pages/ContactPage";

export const test = base.extend<{
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    fakturadetaljerPage: FakturadetaljerPage;
    contactPage: ContactPage;
}>({
    loginPage: async ({page}, use) => {
        await use(new LoginPage(page));
    },
    dashboardPage: async ({page}, use) => {
        await use(new DashboardPage(page));
    },
    fakturadetaljerPage: async ({page}, use) => {
        await use(new FakturadetaljerPage(page));
    },
    contactPage: async ({page}, use) => {
        await use(new ContactPage(page));
    },
});
