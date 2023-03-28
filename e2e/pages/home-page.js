export class HomePage {
  title;
  heroImage;
  featuring;

  constructor(page) {
    this.page = page;
    this.title = page.getByTestId('title');
    this.heroImage = page.getByTestId('hero-image');
    this.featuring = page.getByTestId('featuring').getByRole('link');
  }

  async clickOnAngularMaterialLink() {
    await this.page.getByRole('link', { name: 'Angular Material' }).click();
  }
}
