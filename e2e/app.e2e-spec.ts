import { TotoraPage } from './app.po';

describe('totora App', () => {
  let page: TotoraPage;

  beforeEach(() => {
    page = new TotoraPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
