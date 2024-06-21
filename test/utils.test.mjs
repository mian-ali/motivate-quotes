import { getRandomQuote, getDayOfQuote } from '../lib/index.js';
import { expect } from 'chai';

describe('Utils', () => {
  it('should fetch a random quote', () => {
    const quote = getRandomQuote();
    expect(quote).to.have.property('text');
  });

  it('should fetch a random programming quote', () => {
    const quote = getRandomQuote('programming');
    expect(quote).to.have.property('text');
  });

  it('should fetch a daily quote', () => {
    const quote = getDayOfQuote();
    expect(quote).to.have.property('text');
  });
});
