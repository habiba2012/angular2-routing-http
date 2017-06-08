import { DerekTutorialPage } from './app.po';

describe('derek-tutorial App', () => {
  let page: DerekTutorialPage;

  beforeEach(() => {
    page = new DerekTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
