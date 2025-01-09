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



//Testar se a página inicial de um site de jogos carrega corretamente
//const { test, expect } = require('@playwright/test');

test('Página inicial carrega corretamente', async ({ page }) => {
  await page.goto('https://exemplo-site-de-jogos.com');
  await expect(page).toHaveTitle(/Site de Jogos/i);
  await expect(page.locator('header')).toBeVisible();
});


//Exemplo 2: Testar o login em uma plataforma de jogos

//const { test, expect } = require('@playwright/test');

test('Login funcional', async ({ page }) => {
  await page.goto('https://exemplo-site-de-jogos.com');
  
  await page.click('text=Login');
  await page.fill('#username', 'usuario_teste');
  await page.fill('#password', 'senha_segura');
  await page.click('button[type="submit"]');
  
  await expect(page.locator('.user-profile')).toContainText('Bem-vindo, usuario_teste');
});


//Exemplo 3: Verificar se um jogo carrega corretamente
//const { test, expect } = require('@playwright/test');

test('Carregar um jogo específico', async ({ page }) => {
  await page.goto('https://exemplo-site-de-jogos.com');
  
  await page.click('text=Jogar Agora'); // Modifique conforme o botão no site
  await expect(page.frameLocator('iframe.game-frame')).toBeVisible();
  await expect(page.frameLocator('iframe.game-frame').locator('#game-start')).toBeVisible();
});

//Testar pesquisa por jogos


//const { test, expect } = require('@playwright/test');

test('Pesquisar jogos', async ({ page }) => {
  await page.goto('https://exemplo-site-de-jogos.com');
  
  await page.fill('#search-bar', 'jogo de estratégia');
  await page.press('#search-bar', 'Enter');
  
  await expect(page.locator('.game-list')).toContainText('Jogo de Estratégia');
});

//Testar o sistema de pontuação

//const { test, expect } = require('@playwright/test');

test('Pontuação atualizada corretamente após partida', async ({ page }) => {
  await page.goto('https://exemplo-site-de-jogos.com');
  
  await page.click('text=Jogar Agora');
  await page.waitForSelector('iframe.game-frame');
  const gameFrame = page.frameLocator('iframe.game-frame');
  
  await gameFrame.locator('#start-game').click();
  // Simular interações no jogo, se aplicável
  await gameFrame.locator('#end-game').click();
  
  const score = await gameFrame.locator('#score').textContent();
  expect(Number(score)).toBeGreaterThan(0); // Modifique conforme esperado
});

Exemplo 1: Testar se a página inicial de um site de jogos carrega corretamente
javascript
Copiar código
const { test, expect } = require('@playwright/test');

test('Página inicial carrega corretamente', async ({ page }) => {
  await page.goto('https://exemplo-site-de-jogos.com');
  await expect(page).toHaveTitle(/Site de Jogos/i);
  await expect(page.locator('header')).toBeVisible();
});
Exemplo 2: Testar o login em uma plataforma de jogos
javascript
Copiar código
const { test, expect } = require('@playwright/test');

test('Login funcional', async ({ page }) => {
  await page.goto('https://exemplo-site-de-jogos.com');
  
  await page.click('text=Login');
  await page.fill('#username', 'usuario_teste');
  await page.fill('#password', 'senha_segura');
  await page.click('button[type="submit"]');
  
  await expect(page.locator('.user-profile')).toContainText('Bem-vindo, usuario_teste');
});
Exemplo 3: Verificar se um jogo carrega corretamente
javascript
Copiar código
const { test, expect } = require('@playwright/test');

test('Carregar um jogo específico', async ({ page }) => {
  await page.goto('https://exemplo-site-de-jogos.com');
  
  await page.click('text=Jogar Agora'); // Modifique conforme o botão no site
  await expect(page.frameLocator('iframe.game-frame')).toBeVisible();
  await expect(page.frameLocator('iframe.game-frame').locator('#game-start')).toBeVisible();
});
Exemplo 4: Testar pesquisa por jogos
javascript
Copiar código
const { test, expect } = require('@playwright/test');

test('Pesquisar jogos', async ({ page }) => {
  await page.goto('https://exemplo-site-de-jogos.com');
  
  await page.fill('#search-bar', 'jogo de estratégia');
  await page.press('#search-bar', 'Enter');
  
  await expect(page.locator('.game-list')).toContainText('Jogo de Estratégia');
});
//Exemplo 5: Testar o sistema de pontuação

const { test, expect } = require('@playwright/test');

test('Pontuação atualizada corretamente após partida', async ({ page }) => {
  await page.goto('https://exemplo-site-de-jogos.com');
  
  await page.click('text=Jogar Agora');
  await page.waitForSelector('iframe.game-frame');
  const gameFrame = page.frameLocator('iframe.game-frame');
  
  await gameFrame.locator('#start-game').click();
  // Simular interações no jogo, se aplicável
  await gameFrame.locator('#end-game').click();
  
  const score = await gameFrame.locator('#score').textContent();
  expect(Number(score)).toBeGreaterThan(0); // Modifique conforme esperado
});