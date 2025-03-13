const quotes = [
  "The only way to do great work is to love what you do. Steve Jobs",
  "In the middle of difficulty lies opportunity. Albert Einstein",
  "Be the change that you wish to see in the world. Mahatma Gandhi",
  "The best time to plant a tree was 20 years ago. The second best time is now. Chinese Proverb",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. Winston Churchill",
  "You miss 100% of the shots you don’t take. Wayne Gretzky",
  "Life is 10% what happens to us and 90% how we react to it. Charles R. Swindoll",
  "The only limit to our realization of tomorrow is our doubts of today. Franklin D. Roosevelt",
  "Do what you can, with what you have, where you are. Theodore Roosevelt",
  "Happiness is not something ready-made. It comes from your own actions. Dalai Lama",
  "Believe you can and you're halfway there. Theodore Roosevelt",
  "The journey of a thousand miles begins with one step. Lao Tzu",
  "It always seems impossible until it’s done. Nelson Mandela",
  "Strive not to be a success, but rather to be of value. Albert Einstein",
  "The only person you are destined to become is the person you decide to be. Ralph Waldo Emerson",
  "Your time is limited, don’t waste it living someone else’s life. Steve Jobs",
  "Act as if what you do makes a difference. It does. William James",
  "The best revenge is massive success. Frank Sinatra",
  "What you get by achieving your goals is not as important as what you become by achieving your goals. Zig Ziglar",
  "Keep your face always toward the sunshine—and shadows will fall behind you. Walt Whitman",
];

const GenerateBtn = document.getElementById("GenerateBtn");
const quoteDisplay = document.getElementById("quoteDisplay");

const shownQuotes = new Set();

function generateQuote() {
  if (shownQuotes.size === quotes.length) {
    quoteDisplay.textContent = "All quotes have been shown!";
    return;
  }

  let quote;
  do {
    const random = Math.floor(Math.random() * quotes.length);
    quote = quotes[random];
  } while (shownQuotes.has(quote));

  shownQuotes.add(quote);
  quoteDisplay.textContent = quote;
}

GenerateBtn.addEventListener("click", generateQuote);
