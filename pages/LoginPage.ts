import {Page} from "@playwright/test";
import BasePage from "./BasePage";

export class LoginPage extends BasePage {

    private loginTextbox = () =>
        this.page.getByRole("textbox", {name: "E-post"});
    private passwordTextbox = () =>
        this.page.getByRole("textbox", {name: "Passord"});
    private loginButton = () =>
        this.page.getByRole("button", {name: "LOGG INN"});
    private errorMessage = () => this.page.getByText("Feil brukernavn / passord");

    constructor(page: Page) {
        super(page);
    }

    public async goto() {
        await this.page.goto(process.env.BASE_URL + "login");
    }

    public async login(email: string, password: string) {
        await this.loginTextbox().fill(email);
        await this.passwordTextbox().fill(password);
        await this.loginButton().click();
    }

    public async assertInvalidLoginMessageIsVisible() {
        await this.errorMessage().isVisible();
    }
}
