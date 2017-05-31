import { NumeroTresPage } from './app.po';

describe('numero-tres App', () => {
  let page: NumeroTresPage;

  beforeEach(() => {
    page = new NumeroTresPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
