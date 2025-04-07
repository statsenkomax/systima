import {expect, Page} from '@playwright/test';
import getBackgroundColor from "../utils/fieldUtils";

export class ContactPage {
    private page: Page;
    private nyContactButton = () => this.page.getByRole('button', {name: 'NY KONTAKT'});
    private opprettContactButton = () => this.page.getByRole('button', {name: 'OPPRETT KONTAKT'});
    private navnErrorMessage = () => this.page.getByText('Vennligst skriv inn navn');
    private nuvnField = () => this.page.getByRole('textbox', {name: 'Navn *'});
    private successPopUp = () => this.page.getByText('Ny kontakt lagret.');

    constructor(page: Page) {
        this.page = page;
    }

    public async goto() {
        await this.page.goto(process.env.BASE_URL + 'systimaas7/contacts');
    }

    public async clickNyContractButton() {
        await this.nyContactButton().click();
    }

    public async clickOpprettContractButton() {
        await this.opprettContactButton().scrollIntoViewIfNeeded()
        await this.opprettContactButton().click();
    }

    public async assertOpprettContractButtonIsDisabled() {
        await expect(this.opprettContactButton()).toBeDisabled();
    }

    public async assertNavnErrorMessageIsRed() {
        expect(await getBackgroundColor(this.navnErrorMessage())).toBe('rgb(255, 82, 82)');
    }

    public async fillNavn(name: string) {
        await this.nuvnField().fill(name);
    }

    public async assertSuccessPopUpIsVisible() {
        await expect(this.successPopUp()).toBeVisible({timeout: 10000});
    }
}