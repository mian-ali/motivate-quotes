# Motivate Quotes

[![NPM Version](http://img.shields.io/npm/v/motivate-quotes.svg?style=flat&logo=npm)](https://www.npmjs.org/package/motivate-quotes)
[![GitHub license](https://img.shields.io/github/license/mian-ali/motivate-quotes.svg?style=flat&logo=github)](https://github.com/mian-ali/motivate-quotes/blob/publish/LICENSE)
[![Snyk Vulnerabilities for npm package version](https://img.shields.io/snyk/vulnerabilities/npm/motivate-quotes.svg?color=9cf&logo=snyk)](https://www.npmjs.com/package/motivate-quotes)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat&logo=github)](https://github.com/mian-ali/motivate-quotes/pulls)


**Motivate Quotes is an [NPM](https://www.npmjs.com/package/motivate-quotes) package that provides inspiring and motivational quotes from various categories such as Programming, Education, Trading, Business, Life, Fitness, Creativity, and Leadership.**

Click [here](https://www.npmjs.com/package/motivate-quotes) to view this package on the NPM registry.

## Getting Started

[![NPM](https://nodei.co/npm/motivate-quotes.png?compact=true)](https://nodei.co/npm/motivate-quotes/)

### Installation

To use this package, install it via npm:

```bash
$ npm install motivate-quotes

```

## Usage

Import the functions from the **motivate-quotes** package and use them as demonstrated below:

```js
import { getQuotes, getRandomQuote, getDayOfQuote } from 'motivate-quotes';

// Fetch quotes from a specific category
try {
  const quotes = getQuotes({
    author: false,
    numberOfQuotes: 2,
    category: 'Programming',
  });
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


| Name             | Type     | Description                                                                                      |
|------------------|----------|--------------------------------------------------------------------------------------------------|
| **category**     | string   | The category of quotes. Required. Available categories: **Programming, Education, Trading, Business, Life, Fitness, Creativity, Leadership**. |
| **author**       | boolean  | Whether to include the author's name. Optional. Default is **true**.                              |
| **numberOfQuotes** | number  | The number of quotes to return. Optional. Default is **1**.                                       | 


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

| Name             | Type     | Description                                                                                      |
|------------------|----------|--------------------------------------------------------------------------------------------------|
| **category**     | string   | The category of quotes. Required. Available categories: **Programming, Education, Trading, Business, Life, Fitness, Creativity, Leadership**. | 


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

## Examples

To view the examples, clone the **motivate-quotes** repo and install the dependencies:

```bash
$ git clone https://github.com/mian-ali/motivate-quotes.git
$ cd motivate-quotes
$ npm install
```

Then run the [`examples/index.js`](./examples/index.js):

```bash
$ node index.js
```

## Tests

- `npm run test`: Runs unit tests
- `npm run format`: Run eslint format

## Contributors

Contributors are individuals who have made significant contributions to a project. They play a crucial role in the development and success of open-source projects by contributing code, documentation, bug fixes, and other valuable contributions.

If you would like to become a contributor to this project, please follow these steps:

1. Fork the project repository.
2. Make the necessary changes or additions to the codebase.
3. Test your changes thoroughly to ensure they do not introduce any issues.
4. Submit a pull request to the original repository, detailing your changes and why they are beneficial.

> **Note**: So that you know, all contributions are subject to review and approval by the project maintainers. Your contributions should align with the project's guidelines and coding standards.

Thank you for considering becoming a contributor to this project. Your contributions are greatly appreciated!


## Author

**[Ali Ahmad](https://aliahmad.co)**
