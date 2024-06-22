# Zen Quotes

[![NPM Version](http://img.shields.io/npm/v/zen-quotes.svg?style=flat&logo=npm)](https://www.npmjs.org/package/zen-quotes)
[![GitHub license](https://img.shields.io/github/license/your-github-username/zen-quotes.svg?style=flat&logo=github)](https://github.com/mian-ali/zen-quotes/blob/main/LICENSE)
[![npm collaborators](https://img.shields.io/npm/collaborators/zen-quotes.svg?logo=npm)](https://www.npmjs.com/package/zen-quotes)
[![Snyk Vulnerabilities for npm package version](https://img.shields.io/snyk/vulnerabilities/npm/zen-quotes.svg?color=9cf&logo=snyk)](https://www.npmjs.com/package/zen-quotes)
[![npm](https://img.shields.io/npm/dy/zen-quotes.svg?logo=npm&color=yellow)](https://www.npmjs.com/package/zen-quotes)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat&logo=github)](https://github.com/mian-ali/zen-quotes/pulls)

**Zen Quotes is an NPM package that provides inspiring and motivational quotes from various categories such as Programming, Education, Trading, Business, Life, Fitness, Creativity, and Leadership.**

Click [here](https://www.npmjs.com/package/zen-quotes) to view this package on the NPM registry.

## Getting Started

[![NPM](https://nodei.co/npm/zen-quotes.png?compact=true)](https://nodei.co/npm/zen-quotes/)

### Installation

To use this package, install it via npm:

```bash
$ npm install zen-quotes

```
## Usage
Import the functions from the **zen-quotes** package and use them as demonstrated below:

```js
import { getQuotes, getRandomQuote, getDayOfQuote } from 'zen-quotes';

// Fetch quotes from a specific category
try {
    const quotes = getQuotes({ author: false, numberOfQuotes: 2, category: 'Programming' });
    console.log(quotes);
} catch (error) {
    console.error(error.message);
}

// Fetch a random quote from a specific category
const randomQuote = getRandomQuote('Education');
console.log(randomQuote);

// Fetch the quote of the day
const dayOfQuote = getDayOfQuote();
console.log(dayOfQuote);


```

## Functions

### `getQuotes(options)`

Fetches quotes based on the specified options.

- **options**: An object with the following properties:
  - `author` (boolean): Whether to include the author's name. Default is `true`.
  - `numberOfQuotes` (number): The number of quotes to return. Default is `1`.
  - `category` (string): The category of quotes. Available categories: Programming, Education, Trading, Business, Life, Fitness, Creativity, Leadership.

Returns an array of quotes based on the specified options.

Example:

```json
[
  {
    "text": "First, solve the problem. Then, write the code.",
    "author": "John Johnson"
  },
  {
    "text": "Experience is the name everyone gives to their mistakes.",
    "author": "Oscar Wilde"
  }
]
```

### `getRandomQuote(category)`

Fetches a random quote from the specified category.

  - `category` (string): The category of quotes. Available categories: Programming, Education, Trading, Business, Life, Fitness, Creativity, Leadership.

Returns an array of quotes based on the specified options.

Example:

```json
{
  "text": "Education is the most powerful weapon which you can use to change the world.",
  "author": "Nelson Mandela"
}

```

### `getDayOfQuote()`

Fetches the quote of the day.

Returns the quote of the day.

Example:

```json
{
  "text": "The only way to do great work is to love what you do.",
  "author": "Steve Jobs"
}

```