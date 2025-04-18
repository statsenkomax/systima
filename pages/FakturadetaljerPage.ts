import { expect, Page } from "@playwright/test";
import BasePage from "./BasePage";

export class FakturadetaljerPage extends BasePage{
  private contactButton = () =>
    this.page.getByRole("button", { name: "Kontakt (valgfri ved kvittering)" });
  private accountButton = () =>
    this.page.getByRole("button", { name: "Konto *" });
  private bokforButton = () =>
    this.page.locator("[class*=justify-space-between] button[kb-nav]");
  private amountField = () =>
    this.page.getByRole("textbox", { name: "Totalt beløp inkl. mva. *" });
  private invoiceNumberField = () =>
    this.page.getByRole("textbox", { name: "Fakturanr." });
  private invoiceDateField = () => this.page.locator("#input-164");
  private dueDateField = () => this.page.locator("#input-168");
  private successPopUp = () =>
    this.page.getByText("Bilag opprettet med bilagsnr.");
  private invoiceNumberErrorMessage = () =>
    this.page.getByText("Fakturanr. er allerede bokført");

  constructor(page: Page) {
    super(page);
  }

  public async goto() {
    await this.page.goto(
      process.env.BASE_URL + "systimaas7/bookkeeping/purchase",
    );
  }

  public async clickContractDropdown() {
    await this.contactButton().click();
  }

  public async clickAccountDropdown() {
    await this.accountButton().click();
  }

  public async clickBokforButton() {
    await this.bokforButton().click();
  }

  public async fillAmount(amount: string) {
    await this.amountField().fill(amount);
  }

  public async fillInvoiceNumber(number: string) {
    await this.invoiceNumberField().fill(number);
  }

  public async fillInvoiceDate(date: string) {
    await this.invoiceDateField().fill(date);
  }

  public async fillDueDate(date: string) {
    await this.dueDateField().fill(date);
  }

  public async selectOptionByRole(optionText: string) {
    const option = this.page
      .locator('[role="option"]')
      .filter({ hasText: optionText });
    await option.waitFor({ state: "visible", timeout: 5000 });
    await option.click();
  }

  public async assertSuccessPopUpIsVisible() {
    await expect(this.successPopUp()).toBeVisible({ timeout: 10000 });
  }

  public async assertInvoiceNumberErrorMessageIsVisibleAndRed() {
    await expect(this.invoiceNumberErrorMessage()).toBeVisible();
    expect(await this.getBackgroundColor(this.invoiceNumberErrorMessage())).toBe(
      "rgb(255, 82, 82)",
    );
  }
}
