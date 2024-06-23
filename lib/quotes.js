/**
 *
 * @author Ali Ahmad <https://github.com/mian-ali>
 */

const programmingQuotes = require('./categories/programming');
const educationQuotes = require('./categories/education');
const tradingQuotes = require('./categories/trading');
const businessQuotes = require('./categories/business');
const lifeQuotes = require('./categories/life');
const fitnessQuotes = require('./categories/fitness');
const creativityQuotes = require('./categories/creativity');
const leadershipQuotes = require('./categories/leadership');

const quotes = {
  programming: programmingQuotes,
  education: educationQuotes,
  trading: tradingQuotes,
  business: businessQuotes,
  life: lifeQuotes,
  fitness: fitnessQuotes,
  creativity: creativityQuotes,
  leadership: leadershipQuotes,
};

const categories = Object.keys(quotes).reduce((acc, key) => {
  acc[key.toLowerCase()] = key;
  return acc;
}, {});

module.exports = {
  quotes,
  categories,
};
