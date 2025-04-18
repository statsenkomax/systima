import { test } from "../fixtures/fixture";

test.beforeEach(async ({ contactPage }) => {
  await contactPage.goto();
});

test.describe("Contact feature tests", async () => {
  test("Create contact", async ({ contactPage }) => {
    await contactPage.clickNyContractButton();
    await contactPage.fillNavn("Test");
    await contactPage.clickOpprettContractButton();

    await contactPage.assertSuccessPopUpIsVisible();
  });

  test("Validate contact creation", async ({ contactPage }) => {
    await contactPage.clickNyContractButton();
    await contactPage.clickOpprettContractButton();

    await contactPage.assertOpprettContractButtonIsDisabled();
    await contactPage.assertNavnErrorMessageIsRed();
  });
});
