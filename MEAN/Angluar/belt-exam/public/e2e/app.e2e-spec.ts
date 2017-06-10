import { BeltExamPage } from './app.po';

describe('belt-exam App', () => {
  let page: BeltExamPage;

  beforeEach(() => {
    page = new BeltExamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
