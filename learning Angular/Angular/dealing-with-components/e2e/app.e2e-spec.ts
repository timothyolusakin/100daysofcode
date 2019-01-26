import { DealingWithComponentsPage } from './app.po';

describe('dealing-with-components App', function() {
  let page: DealingWithComponentsPage;

  beforeEach(() => {
    page = new DealingWithComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
