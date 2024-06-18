import { expect } from 'chai';
import { getRandomQuote, getDailyQuote } from '../lib/utils.js';

describe('Utils', () => {
    it('should fetch a random quote', () => {
        const quote = getRandomQuote();
        expect(quote).to.have.property('text');
        expect(quote).to.have.property('author');
    });

    it('should fetch a daily quote', () => {
        const quote = getDailyQuote();
        expect(quote).to.have.property('text');
        expect(quote).to.have.property('author');
    });

    it('should fetch a random programming quote', () => {
        const quote = getRandomQuote('programming');
        expect(quote).to.have.property('text');
        expect(quote).to.have.property('author');
    });

    // Add more tests for other categories
});
