import { test } from "../fixtures/fixture";

test.beforeEach(async ({ fakturadetaljerPage }) => {
  await fakturadetaljerPage.goto();
});

test.describe("Purchase feature tests", async () => {
  test("Create Purchase", async ({ fakturadetaljerPage }) => {
    await fakturadetaljerPage.clickContractDropdown();
    await fakturadetaljerPage.selectOptionByRole("Systima AS");
    await fakturadetaljerPage.fillAmount("100");
    await fakturadetaljerPage.fillInvoiceDate("01.01.2024");
    await fakturadetaljerPage.fillDueDate("15.01.2024");
    await fakturadetaljerPage.clickAccountDropdown();
    await fakturadetaljerPage.selectOptionByRole("1000 Utvikling, ervervet");
    await fakturadetaljerPage.clickBokforButton();

    await fakturadetaljerPage.assertSuccessPopUpIsVisible();
  });

  test("Duplicate Invoice Number Handling", async ({ fakturadetaljerPage }) => {
    await fakturadetaljerPage.clickContractDropdown();
    await fakturadetaljerPage.selectOptionByRole("Systima AS");
    await fakturadetaljerPage.fillAmount("100");
    await fakturadetaljerPage.fillInvoiceDate("01.01.2024");
    await fakturadetaljerPage.fillDueDate("15.01.2024");
    await fakturadetaljerPage.fillDueDate("15.01.2024");
    await fakturadetaljerPage.fillInvoiceNumber("1");
    await fakturadetaljerPage.clickAccountDropdown();
    await fakturadetaljerPage.selectOptionByRole("1000 Utvikling, ervervet");
    await fakturadetaljerPage.clickBokforButton();

    await fakturadetaljerPage.assertInvoiceNumberErrorMessageIsVisibleAndRed();
  });
});
