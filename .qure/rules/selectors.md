---
name: Element Selectors
status: draft
---
Selectors:
- Primary: page.locator()
- Fallback: getByRole()
- Examples:
  - page_objects/forms/practiceForm.page.ts: page.locator('#firstName')
  - page_objects/elements/simpleButton.page.ts: page.getByRole('button', { name: 'Click' })
