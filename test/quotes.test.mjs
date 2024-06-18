import { expect } from 'chai';
import quotes from '../lib/quotes.js';

describe('Quotes', () => {
    it('should have programming quotes', () => {
        expect(quotes).to.have.property('programming');
        expect(quotes.programming).to.be.an('array');
    });

    // Add more tests for other categories
});
