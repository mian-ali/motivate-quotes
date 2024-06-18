const quotes = require('./quotes');

const getRandomQuote = (category) => {
    if (category && quotes[category]) {
        const categoryQuotes = quotes[category];
        return categoryQuotes[Math.floor(Math.random() * categoryQuotes.length)];
    }
    const allQuotes = Object.values(quotes).flat();
    return allQuotes[Math.floor(Math.random() * allQuotes.length)];
};

const getDailyQuote = (category) => {
    const today = new Date();
    const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    if (category && quotes[category]) {
        const categoryQuotes = quotes[category];
        return categoryQuotes[seed % categoryQuotes.length];
    }
    const allQuotes = Object.values(quotes).flat();
    return allQuotes[seed % allQuotes.length];
};

module.exports = {
    getRandomQuote,
    getDailyQuote
};
