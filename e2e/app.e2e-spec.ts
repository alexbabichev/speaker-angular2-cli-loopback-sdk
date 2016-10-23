import { SpeakerPage } from './app.po';

describe('speaker App', function() {
  let page: SpeakerPage;

  beforeEach(() => {
    page = new SpeakerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
