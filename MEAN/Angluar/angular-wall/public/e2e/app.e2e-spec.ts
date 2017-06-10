import { AngularWallPage } from './app.po';

describe('angular-wall App', () => {
  let page: AngularWallPage;

  beforeEach(() => {
    page = new AngularWallPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
