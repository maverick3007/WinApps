import { WinAppsPage } from './app.po';

describe('win-apps App', function() {
  let page: WinAppsPage;

  beforeEach(() => {
    page = new WinAppsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
