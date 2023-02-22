export class NavBarPage {
  logo;
  header;
  githubRepoName;

  constructor(page) {
    this.page = page;
    this.logo = this.page.getByTestId('ng-hotrod-logo');
    this.header = this.page.getByTestId('header');
    this.githubRepoName = this.page.getByRole('link', { name: 'angularjs-material-vite' });
  }

  async clickOnGitHubIcon() {
    await this.page.getByTestId('github').click();
  }
}
