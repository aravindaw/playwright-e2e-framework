---
name: Test Abstractions & Page Objects
status: draft
---
Test abstractions:
- Instantiation: Playwright fixtures inject page objects constructed with the test’s `page`.
- Layers:
  - `page_objects/` — Page objects (base: `BasePage`): Own page navigation, locators, and page-level actions and assertions; use them to interact with a specific page.
- Boundaries: Page objects own page-specific browser interactions; specs compose them into test scenarios and assertions.
