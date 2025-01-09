// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://google.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Google/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


test('Amazon', async ({ page }) => {
  await page.goto('https://www.amazon.com.br/'); //para o site que precisa ir 
  await page.getByPlaceholder('Pesquisar Amazon.com.br') //procurar campo
  await page.locator('#twotabsearchtextbox').fill('Playstation 5') //escrever no campo
  await page.getByRole('button', { name: 'Ir', exact: true }).click() // clicar no botão de busca
});

test('OpaGames', async ({ page }) => {
  await page.goto('https://opagames.com//'); //para o site que precisa ir npx playwright test --ui
  //await page.getByPlaceholder('Pesquisar Amazon.com.br') //procurar campo
  await page.getByRole('button', { name: 'I am over 18' }).click();
  await page.getByRole('heading', { name: 'Game Catalog' }) 
  await page.locator('#upcomingScroll')
});


test('Captura de tela da página inicial', async ({ page }) => {
  await page.goto('https://google.com');
  await page.screenshot({ path: 'screenshot.png' });
});