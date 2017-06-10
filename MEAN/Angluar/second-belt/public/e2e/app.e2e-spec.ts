import { SecondBeltPage } from './app.po';

describe('second-belt App', () => {
  let page: SecondBeltPage;

  beforeEach(() => {
    page = new SecondBeltPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
