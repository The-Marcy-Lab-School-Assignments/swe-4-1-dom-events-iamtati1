// Feel free to use this array of fortunes or come up with your own!
const fortunes = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes ",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again ",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
  "Soon enough",
  "yes",
];

/* 
TODO:
- [x] Add an event listener to the ask button that:
  - [x] hides the eight ball (hint: adjust the style.display property)
  - [x] generates a random fortune from the fortunes array
  - [x] shows the fortune in the answer element
*/

// TODO: Listen for button clicks and increase the balloon's font size
// TODO: When the font size is > 700, "pop" the balloon 💥 
const button = document.querySelector('#ask-btn');
const eightBall = document.querySelector("#eight-ball");
const answer = document.querySelector("#answer");
button.addEventListener('click', () => {
  eightBall.style.display = "none";
  const fortune = generateFortune(fortunes);
  answer.textContent = fortune;

});

function generateFortune(fortunesArray) {
  const randomIndex = Math.floor(Math.random() * fortunesArray.length);
  return fortunesArray[randomIndex];
}


