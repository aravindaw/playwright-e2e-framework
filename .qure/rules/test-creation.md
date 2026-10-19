---
name: Test Creation Patterns
status: draft
---
Test creation:
- Suite naming: `test.describe('Buttons', () => { ... })`
- Test naming: `test('@SMOKE clicking the button shows the result', async ({ simpleButtonPage }) => { ... })`
- Tags: `@SMOKE`, `@REGRESSION`; applied as a prefix in individual test titles.
- Skeleton:
```typescript
import { test, expect } from '@fixture/pages.fixture';

test.describe('Feature', () => {
  test('@SMOKE verifies the result', async ({ simpleButtonPage }) => {
    await simpleButtonPage.open();
    await simpleButtonPage.click();
    await expect(simpleButtonPage.result).toHaveText('Submitted');
  });
});
```
