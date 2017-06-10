import { AngularCRUDPage } from './app.po';

describe('angular-crud App', () => {
  let page: AngularCRUDPage;

  beforeEach(() => {
    page = new AngularCRUDPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
