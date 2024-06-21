const { quotes, categories } = require('./quotes');

function getQuotes({ author = true, numberOfQuotes = 1, category }) {
  const normalizedCategory = category.toLowerCase();
  if (!categories[normalizedCategory]) {
    throw new Error(
      `Category '${category}' not found. Available categories are: ${Object.keys(categories).join(', ')}.`,
    );
  }

  const selectedQuotes = quotes[categories[normalizedCategory]];
  const shuffledQuotes = selectedQuotes.sort(() => 0.5 - Math.random());

  return shuffledQuotes.slice(0, numberOfQuotes).map((quote) => {
    if (!author) {
      return { text: quote.text };
    }
    return quote;
  });
}

function getRandomQuote(category) {
  const normalizedCategory = category ? category.toLowerCase() : null;
  if (category && !categories[normalizedCategory]) {
    throw new Error(
      `Category '${category}' not found. Available categories are: ${Object.keys(categories).join(', ')}.`,
    );
  }

  const allCategories = category
    ? [categories[normalizedCategory]]
    : Object.keys(quotes);
  const randomCategory =
    allCategories[Math.floor(Math.random() * allCategories.length)];
  const randomQuote =
    quotes[randomCategory][
      Math.floor(Math.random() * quotes[randomCategory].length)
    ];

  return randomQuote;
}

function getDayOfQuote() {
  const date = new Date();
  const dayIndex = date.getDate() % Object.keys(quotes).length;
  const category = Object.keys(quotes)[dayIndex];
  const quoteIndex = date.getDate() % quotes[category].length;

  return quotes[category][quoteIndex];
}

module.exports = {
  getQuotes,
  getRandomQuote,
  getDayOfQuote,
};
