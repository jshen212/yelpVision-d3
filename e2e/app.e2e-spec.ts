import { YelpVisionD3Page } from './app.po';

describe('yelp-vision-d3 App', function() {
  let page: YelpVisionD3Page;

  beforeEach(() => {
    page = new YelpVisionD3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
