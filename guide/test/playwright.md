# Playwright

## Install

```sh
pnpm create playwright
```

By default downloads to `C:\Users\xxx\AppData\Local\ms-playwright`.

## Run

```sh
# Run end-to-end tests
pnpm exec playwright test
# Start the interacive UI mode
pnpm exec playwright test --ui
# Only on desktop Chrome
pnpm exec playwright test --project=chromium
# Run the tests in a specific file.
pnpm exec playwright test example
# Run the tests in debug mode
pnpm exec playwright test --debug
# Auto generate tests with codegen
pnpm exec playwright codegen
# Open last HTML report:
pnpm exec playwright show-report
# Udate playwright to latest
pnpm add -D @playwright/test@latest
# Check playwrgith version
pnpm exec playwright --version
```

## Writing Tests

### Actions

* Navigation

```ts
await page.goto('https://playwright.dev');
```

* Interactions

```ts
const getStarted = page.getByRole('link', { name: 'Get started' });

await getStarted.click();
```

Basic actions:

* check()
* click()
* uncheck
* hover()
* fill()
* focus()
* press()
* setInputFiles()
* selectOption()

### Assertions

`expect(value).toBeTruthy();`

`await expect(page).toHaveTitle(/Playwright/)`
