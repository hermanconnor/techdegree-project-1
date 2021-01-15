/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/****************
 * `quotes` array
 ****************/

const quotes = [
  {
    quote:
      'The person who says it cannot be done should not interrupt the person who is doing it',
    source: 'Chinese Proverb',
  },

  {
    quote:
      'The only thing necessary for the triumph of evil is for good men to do nothing',
    source: 'Edmund Burke',
    year: 1770,
  },

  {
    quote:
      'When bad men combine, the good must associate; else they will fall one by one, an unpitied sacrifice in a contemptible struggle',
    source: 'Edmund Burke',
  },

  {
    quote:
      'Moral courage is the most valuable and usually the most absent characteristic in men',
    source: 'General George S. Patton',
  },

  {
    quote:
      "Don't be too timid and squeamish about your actions. All life is an experiment. The more experiments you make the better",
    source: 'Ralph Waldo Emerson',
    tags: 'Inspirational',
  },

  {
    quote:
      "I am thankful for all of those who said, 'NO' to me. It's because of them I'm doing it myself",
    source: 'Albert Einstein',
    tags: 'Motivational',
  },

  {
    quote: 'Lead me, follow me, or get out of my way',
    source: 'General George S. Patton',
  },

  {
    quote:
      'He who fights with monsters might take care lest he thereby become a monster. And if you gaze for long into an abyss, the abyss gazes also into you',
    source: 'Friedrich Nietzsche',
    citation: 'Beyond Good and Evil',
  },

  {
    quote: 'To see what is right and not do it is a lack of courage',
    source: 'Confucius',
  },

  {
    quote: 'You are never too old to set another goal or dream a new dream',
    source: 'C.S. Lewis',
    tags: 'Motivational',
  },
];

// Generate Random Numbers
function randomValue(num) {
  return Math.floor(Math.random() * num);
}

// Generate Random RGB Colors
function randomRGB(value) {
  const color = `rgb(${value(256)}, ${value(256)}, ${value(256)})`;
  return color;
}

/***************************
 * `getRandomQuote` function
 ***************************/

// Get Quote Object From Array
function getRandomQuote() {
  // Generate Random Number
  const randomNumber = randomValue(quotes.length);

  // Get random quote object from array and return it
  const randomQuoteObject = quotes[randomNumber];
  return randomQuoteObject;
}

/***********************
 * Auto-refresh Quotes
 ***********************/

// Auto-refresh Quotes
function myQuotes() {
  printQuote();
  document.querySelector('body').style.backgroundColor = randomRGB(randomValue);
}

let autoQuotes = setInterval(myQuotes, 5000);

/***********************
 * `printQuote` function
 ***********************/

// Generate Random Quotes
function printQuote() {
  // Reset auto-refresh quotes when clicked
  clearInterval(autoQuotes);
  autoQuotes = setInterval(myQuotes, 5000);

  // Get a random quote object
  const randomQuote = getRandomQuote();

  // Build html string
  let htmlString = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}
    `;

  // Check properties of objects and append to html string
  if (randomQuote.citation) {
    htmlString += `
      <span class="citation">${randomQuote.citation}</span>
      `;
  }

  if (randomQuote.year) {
    htmlString += `
      <span class="year">${randomQuote.year}</span>
      `;
  }

  if (randomQuote.tags) {
    htmlString += `
    <span><em>#${randomQuote.tags}</em></span>
    `;
  }

  htmlString += `
    </p>
  `;
  // Display The Random Quote To The Page
  document.getElementById('quote-box').innerHTML = htmlString;

  return htmlString;
}

/*************************************************
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 *************************************************/

document
  .getElementById('load-quote')
  .addEventListener('click', printQuote, false);
