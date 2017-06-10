import { DiscussionBoardPage } from './app.po';

describe('discussion-board App', () => {
  let page: DiscussionBoardPage;

  beforeEach(() => {
    page = new DiscussionBoardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
