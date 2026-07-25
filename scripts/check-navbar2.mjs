import { chromium } from 'playwright';

const browser = await chromium.launch();

for (const width of [1366, 1440, 1536, 1920]) {
  const context = await browser.newContext({ viewport: { width, height: 250 }, deviceScaleFactor: 1 });
  const page = await context.newPage();
  await page.goto('http://localhost:5174/about', { waitUntil: 'load' });
  // Screenshot immediately (before fonts/motion settle) to catch any flash-of-overflow
  await page.screenshot({ path: `scripts/nav-${width}-immediate.png` });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: `scripts/nav-${width}-settled.png` });

  const header = await page.locator('header').boundingBox();
  const tagline = await page.locator('text=Turning ambitious ideas').first().boundingBox();
  console.log(`width=${width} header.height=${header.height} tagline.bottom=${tagline.y + tagline.height} overflow=${tagline.y + tagline.height - header.height}`);

  await context.close();
}

await browser.close();
