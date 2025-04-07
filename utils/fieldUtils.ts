import { Locator } from "@playwright/test";

async function getBackgroundColor(locator: Locator): Promise<string> {
  return await locator.evaluate((el) => {
    return window.getComputedStyle(el).color;
  });
}

export default getBackgroundColor;
