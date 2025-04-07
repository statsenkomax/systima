import {test} from '../fixtures/base.page'
import {faker} from "@faker-js/faker";

test.beforeEach(async ({loginPage, context}) => {
    await context.clearCookies();
    await loginPage.goto();
});

test.describe("Login feature tests", async () => {
    test("Login with valid credentials", async ({loginPage, dashboardPage}) => {
        await loginPage.login(process.env.LOGIN, process.env.PASSWORD);//
        await dashboardPage.assertDashboardPageIsOpened();
    });

    test("Login with invalid email and valid password", async ({loginPage}) => {
        await loginPage.login(faker.internet.email(), faker.internet.password());
        await loginPage.assertInvalidLoginMessageIsVisible();
    });
});