# playwright-e2e-framework

A demo of a clean, maintainable end-to-end test framework built with Playwright and TypeScript
using the Page Object Model (POM). It tests [QA Practice](https://www.qa-practice.com/): inputs,
buttons, selects, checkboxes, textareas, the practice form and home page navigation.

Each page is a class that holds its locators and actions, all extending a shared `BasePage`.
Playwright fixtures inject these page objects into the specs, so tests read as short scenarios
with no raw selectors. Test data lives apart from the specs, tests are tagged `@SMOKE` or
`@REGRESSION`, and runs cover Chromium, Firefox and WebKit with HTML, JSON and JUnit reports.

## Structure

```
enums/           Page URL paths (PageEnum), one place for all routes
page_objects/    Page Objects (BasePage + one class per page)
test_data/       Typed test data, kept separate from the specs
tests/
  fixtures/      Playwright fixtures that inject page objects into tests
  elements/      Input, button, select, checkbox, textarea specs
  forms/         Practice form specs
  navigation/    Home page navigation specs
```

Path aliases (`@pageObjects/*`, `@testData/*`, `@enums/*`, `@fixture/*`) are defined in `tsconfig.json`.

## Getting started

```bash
pnpm install
pnpm install:browsers
```

## Running tests

| Command                | What it does                          |
| ---------------------- | ------------------------------------- |
| `pnpm test`            | Run everything                        |
| `pnpm test:chromium`   | Chromium only (also `:firefox`, `:webkit`) |
| `pnpm test:smoke`      | Only `@SMOKE` tests, all browsers     |
| `pnpm test:regression` | `@REGRESSION` and `@SMOKE` tests      |
| `pnpm test:last-failed` | Rerun only the tests that failed last time |
| `pnpm test:headed`     | Run with a visible browser            |
| `pnpm test:ui`         | Playwright UI mode                    |
| `pnpm typecheck`       | TypeScript check                      |

## Test categories

Tests are tagged in the test title:

- `@SMOKE`: one fast happy-path check per feature (8 tests per browser). `pnpm test:smoke`
- `@REGRESSION`: negative cases, validation and variations (22 tests per browser). `pnpm test:regression` runs these plus the smoke tests.

Every spec file has at least one test of each kind.

## Reporting

Every run writes to `playwright-report/`:

- HTML report: `pnpm test:report` (opens the report)
- `report.json` and `results.xml` (JUnit) for CI consumption.

Every test keeps a full-page screenshot, video and trace (in `test-results/`).
Third-party reporting tools are not integrated yet.
