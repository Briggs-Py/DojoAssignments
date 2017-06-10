import { TheMeanWallPage } from './app.po';

describe('the-mean-wall App', () => {
  let page: TheMeanWallPage;

  beforeEach(() => {
    page = new TheMeanWallPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
