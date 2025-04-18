import {Locator, Page} from '@playwright/test';

export default class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async getBackgroundColor(locator: Locator): Promise<string> {
        return await locator.evaluate((el) => {
            return window.getComputedStyle(el).color;
        });
    }
}