import { chromium, firefox } from 'playwright-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import RecapchaPlugin from 'puppeteer-extra-plugin-recaptcha';
import dotenv from 'dotenv';
import { sleep } from '../util/sleep';

const result = dotenv.config();

const stealth = StealthPlugin();

function getRandomInt(min: number, max: number): number {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

async function main() {
  const VISA_EMAIL = process.env["ITALY_VISA_EMAIL"];
  const VISA_PASS = process.env["ITALY_VISA_PASS"];
  const CAPTCHA_KEY = process.env["CAPTCHA_API_KEY"]

  if (!VISA_EMAIL) {
    throw new Error('Email not found');
  }

  if (!VISA_PASS) {
    throw new Error('Pass not found');
  }

  if (!CAPTCHA_KEY) {
    throw new Error('2Captcha key not found');
  }

  chromium.use(stealth);
  chromium.use(RecapchaPlugin({
    provider: {
      id: '2captcha',
      token: CAPTCHA_KEY,
    },
    visualFeedback: true,
  }));

  const browser = await chromium.launch({
    headless: false,
    slowMo: 50,
  });
  const context = await browser.newContext();
  context.setDefaultTimeout(60*1000)
  const page = await context.newPage();

  page.addInitScript(() => {
    Object.defineProperty(navigator, 'webdriver', {
      get: () => undefined
    })
  });

  await page.goto("https://visa.vfsglobal.com/chn/zh/ita/login");

  await page.solveRecaptchas();

  await page.locator("css=#onetrust-accept-btn-handler").click();
  

  await page.locator("css=#mat-input-0").fill(VISA_EMAIL)
  await sleep(getRandomInt(1, 5) * 1000);

  await page.locator("css=#mat-input-1").fill(VISA_PASS)
  
  await sleep(60*1000)

  await page.getByRole("button", {name: "登录"}).click()

  await sleep(getRandomInt(1, 5) * 1000);

  await page.screenshot({path: 'screenshot.png'});

  await browser.close();
}


main().catch(console.error);
