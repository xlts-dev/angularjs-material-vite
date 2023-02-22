import { expect, test } from '@playwright/test';
import { NavBarPage } from '../pages/nav-bar-page';
import { HomePage } from '../pages/home-page';

test.describe('AngularJS-Material-Vite app', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('');
  });
  test.describe('TopNav', () => {
    test('Navbar', async ({ page }) => {
      const navBarPage = new NavBarPage(page);

      await expect(navBarPage.logo).toHaveAttribute('src', '/assets/img/icon-ng-hotrod-light.svg');
      await expect(navBarPage.header).toHaveText('ng-hotrod');
    });
    test('Redirect to GitHub page', async ({ page }) => {
      const navBarPage = new NavBarPage(page);

      await navBarPage.clickOnGitHubIcon();

      await expect(navBarPage.githubRepoName).toHaveText('angularjs-material-vite');
    });
  });

  test.describe('Home', () => {
    test('HomePage content', async ({ page }) => {
      const homePage = new HomePage(page);

      await expect(homePage.title).toHaveText('Modern starter for AngularJS + Angular Material');
      await expect(homePage.heroImage).toHaveAttribute(
        'src',
        'https://res.cloudinary.com/fyodorio/image/upload/v1611994660/my-logos/hotrod-logo_rhkfxy.jpg',
      );
      await expect(await homePage.featuring.all()).toHaveLength(8);
    });
    test('Redirect to Angular Material page', async ({ page }) => {
      const homePage = new HomePage(page);

      await homePage.clickOnAngularMaterialLink();

      await expect(page.url()).toBe('https://material.angularjs.org/latest/');
    });
  });
});
