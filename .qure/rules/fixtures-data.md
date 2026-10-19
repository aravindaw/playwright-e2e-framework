---
name: Fixtures & Test Data
status: draft
---
Fixtures & test data:
- Mechanism: helper exports / shared utilities (no canonical Playwright fixture module). The fixture file uses `base.extend`, but the required `test.extend` / `base.extend` grep found no matches in `tests/fixtures/pages.fixture.ts`.
- Fixture file: `tests/fixtures/pages.fixture.ts`
- Data creation: Tests interact with the pages; no builder-based or seeded test-data creation was verified.
- Builders:
