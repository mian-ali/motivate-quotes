import { getQuotes } from '../lib/index.js';
import { expect } from 'chai';

describe('Quotes', () => {
  it('should return the specified number of quotes from a category', () => {
    const quotes = getQuotes({
      author: false,
      numberOfQuotes: 3,
      category: 'Programming',
    });
    expect(quotes).to.have.lengthOf(3);
  });

  it('should not return the author if author is set to false', () => {
    const quotes = getQuotes({
      author: false,
      numberOfQuotes: 2,
      category: 'Programming',
    });
    quotes.forEach((quote) => {
      expect(quote).to.not.have.property('author');
    });
  });

  it('should return an error if the category is not found', () => {
    try {
      getQuotes({
        author: true,
        numberOfQuotes: 1,
        category: 'NonExistentCategory',
      });
    } catch (error) {
      expect(error.message).to.equal(
        "Category 'NonExistentCategory' not found. Available categories are: programming, education, trading, business, life, fitness, creativity, leadership.",
      );
    }
  });
});
