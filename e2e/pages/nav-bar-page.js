export class NavBarPage {
  logo;
  header;

  constructor(page) {
    this.page = page;
    this.logo = this.page.getByTestId('ng-hotrod-logo');
    this.header = this.page.getByTestId('header');
  }

  async clickOnGitHubIcon() {
    await this.page.getByTestId('github').click();
  }
}
