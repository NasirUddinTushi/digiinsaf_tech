import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1536, height: 250 } });
await page.goto('http://localhost:5174/about', { waitUntil: 'load' });
await page.waitForTimeout(800);

const brandLink = await page.locator('a[aria-label="Digiinsaf home"]').boundingBox();
const navPills = await page.locator('nav > div').nth(0).boundingBox();
console.log('brand link box:', brandLink);
console.log('nav pills box:', navPills);
console.log('brand right edge:', brandLink.x + brandLink.width);
console.log('pills left edge:', navPills.x);
console.log('OVERLAP amount:', (brandLink.x + brandLink.width) - navPills.x);

const tagline = await page.locator('text=Turning ambitious ideas').first().boundingBox();
console.log('tagline box:', tagline);
console.log('tagline right edge:', tagline.x + tagline.width);
console.log('does tagline extend under pills?', tagline.x + tagline.width > navPills.x);

await browser.close();
