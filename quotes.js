const quotes = [
  {
  text: "Here is my quote.",
  author: "Big Boy"
},
  {
  text: "Hey.",
  author: "Linda"
},
  {
  text: "Here is my big quote.",
  author: "Big Big"
},
  {
  text: "Here is my love quote.",
  author: "Lover Boy"
},
  {
  text: "Here is my Roy quote.",
  author: "Big Roy"
},
  {
    text: "And here is a much longer quote to see what that might look like in this box.",
    author: "W.Y. Lifeblood"
  }
];

function rando() {
  const randQuote = Math.floor(Math.random()*(quotes.length));
  const red = Math.floor(Math.random()*(256));
  const green = Math.floor(Math.random()*(256));
  const blue = Math.floor(Math.random()*(256));
  const boxColor = `rgb(${red},${green},${blue})`;
  const bodyColor = `rgb(${256-red},${256-green},${256-blue})`
  
  $("body").css("background-color", bodyColor);
  $("#quote-box").css("background-color", boxColor);
  $("#text").html(quotes[randQuote].text).css("color", bodyColor);
  $("#author").html(`- ${quotes[randQuote].author}`).css("color", bodyColor);
  $("a").css("background-color", bodyColor).css("color", boxColor);
  $("button").css("background-color", bodyColor).css("color", boxColor);

}

$(document).ready(function() {
  rando();
  $("#new-quote").click(rando);
});