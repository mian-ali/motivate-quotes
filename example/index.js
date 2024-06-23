const { getQuotes, getRandomQuote, getDayOfQuote } = require('zen-quotes');

// Example usage:
const quotes = getQuotes({
  category: 'programming',
  numberOfQuotes: 1,
  auther: true,
});
console.log(`Here's a quote by "${quotes.author}": "${quotes.text}"\n`); // will return quote with author [optional] , numberOfQuotes [optional] and category [required];

const randomQuote = getRandomQuote('education');
console.log(
  `Here's a quote by "${randomQuote.author}": "${randomQuote.text}"\n`,
); // will return quote with random quote :  category[required]

const dayOfQuote = getDayOfQuote();
console.log(`Here's a quote by "${dayOfQuote.author}": "${dayOfQuote.text}"\n`); // will return quote with day of quote
