const suits = [
  "Spades", "Club", "Heart", "Diamond"
];

const values = [
  "2", "3", "4", "5", "6", "7", "8", "9", "10",
  "Jack", "Queen", "King", "Ace"
];

const deck = [];

for(let i = 0; i < suits.length; i++) {
  for(let j = 0; j < values.length; j++) {
    var card = {Value: values[j], Suit: suits[i]};
    deck.push(card);
  }
}

// console.log(deck);

for(let i = 0; i < deck.length; i++) {
  let num = Math.floor(Math.random()*i);
  let temp = deck[i];
  deck[i] = deck[num];
  deck[num] = temp;
}

for(let i = 0; i < 13; i++) {
  console.log(`${deck[i].Value} of ${deck[i].Suit}`);
}