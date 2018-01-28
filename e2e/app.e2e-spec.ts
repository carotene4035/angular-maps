import { NewMapsPage } from './app.po';

describe('new-maps App', () => {
  let page: NewMapsPage;

  beforeEach(() => {
    page = new NewMapsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
