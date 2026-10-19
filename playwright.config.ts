import {defineConfig, devices} from '@playwright/test';


export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 2,
  workers: process.env.CI ? 1 : 2,
  reporter: [
    ['list'],
    ['html', {outputFolder: 'playwright-report', open: 'never'}],
    ['json', {outputFile: 'playwright-report/report.json'}],
    ['junit', {outputFile: 'playwright-report/results.xml'}],
  ],

  use: {
    baseURL: 'https://www.qa-practice.com',
    headless: true,
    viewport: {width: 1280, height: 800},
    locale: 'en-US',
    screenshot: {mode: 'on', fullPage: true},
    trace: 'on',
    video: 'on',
  },

  projects: [
    {name: 'chromium', use: {...devices['Desktop Chrome']}},
    {name: 'firefox', use: {...devices['Desktop Firefox']}},
    {name: 'webkit', use: {...devices['Desktop Safari']}},
  ],
});
