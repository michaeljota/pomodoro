import { browser } from 'protractor';
import 'tslib';

describe('App', () => {

  beforeEach(async () => {
    await browser.get('/');
  });

  it('should show Podomoro as title', async () => {
    const subject = await browser.getTitle();
    const result  = 'Your title';
    expect(subject).toEqual(result);
  });
});
