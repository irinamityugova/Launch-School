/*
Twenty-One is a card game with a dealer and a player.

The participants try to get as close to 21 points as possible without going over.
The game starts by dealing cards from a 52-card deck consisting of cards from 4 suits of 13 ranks each.
Both participants receive two cards.
The dealer hides one of his cards (places it face-down) so that the player can't see what it is.

The player can see both of her cards.
The player takes the first turn, and can hit or stay.

If the player hits, she gets another card, and again has the opportunity to hit (get another card) or stay.
If the player goes over 21 points, she busts.
If the player stays, the dealer plays next.
If the player didn't bust, it's now the dealer's turn.
The dealer reveals his face-down card.
If the dealer's points points are less than 17, he must hit and receive another card.
If the dealer goes over 21 points, he busts.
If the dealer has 17 points or more, he must stay.

Results of the game are determined.

OO items

Player (n)
points ()

dealer (n)
human (n)

hit (v)
stay (v)
bust(v)

deck (n)
card (n)
suit
rank
value

heart, diamond, spades, clubs
2, 3, 4, 5, 6, 7, 8, 9, 10, J(10), Q(10), K(10), A(1 or 11)

*/

import rlSync from 'readline-sync';

class Deck {
  constructor() {
    this.suits = ['heart', 'diamond', 'spades', 'clubs'];
    this.names = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    this.cards = [];

    for (let suit of this.suits) {
      for (let name of this.names) {
        let value;
        if (!isNaN(name)) {
          value = Number(name);
        } else if (name === 'A') {
          value = 11;
        } else {
          value = 10;
        }
        this.cards.push(new Card(name, suit, value));
      }
    }
  }

  randomCard() {
    let i = Math.floor(Math.random() * this.cards.length);
    return this.cards[i];
  }
}

class Card {
  constructor(name, suit, value) {
    this.name = name;
    this.suit = suit;
    this.value = value;
  }
}

class Player {
  constructor(name) {
    this.points = 0;
    this.name = name;
  }

  showHit(card) {
    console.log(`${card.name} ${card.suit}`);
    this.hit(card);
  }

  hit(card) {
    if (card.value === 11 && this.points > 10) {
      this.points += 1;
    } else {
      this.points += card.value;
    }
  }

  showPoints() {
    console.log(`${this.name}: ${this.points} pts`);
  }
}

class Dealer extends Player {
  constructor() {
    super('Dealer');
  }

  move(deck) {
    console.log('Here is my card,');
    this.showHit(deck.randomCard());
    this.hit(deck.randomCard());
  }
}

class Human extends Player {
  constructor() {
    super('Irina');
  }

  move(deck) {
    let card = deck.randomCard();

    console.log(`Your card is ${card.name} ${card.suit}`);
    if (this.bust()) return;

    this.hit(card);
    this.showPoints();
  }

  bust() {
    return this.points > 21;
  }
}

class TwentyOneGame {
  constructor() {
    this.dealer = new Dealer();
    this.human = new Human();
    this.deck = new Deck();
  }

  play() {
    this.dealer.move(this.deck);
    if (this.dealer.points === 21) return this.endGame();

    while(this.human.points < 21 && (this.human.points === 0 || rlSync.question('Hit or Stay? ').match(/hit/i))) {
      this.human.move(this.deck);
    }
    this.endGame();

    if(rlSync.question('Repeat? y/n ').match(/y/i)) {
      console.log('---------- New Game ----------');
      this.dealer = new Dealer();
      this.human = new Human();
      this.deck = new Deck();
      this.play();
    }
  }

  endGame() {
    let dpoints = this.dealer.points;
    let hpoints = this.human.points;

    if (this.human.bust()) {
      console.log('Busted! I won.');
      return;
    }

    if (dpoints === 21) {
      console.log('Blackjack! I won.');
      return;
    }

    console.log(`Dealer: ${dpoints}`)
    console.log(`${this.human.name}: ${hpoints}`)

    if (hpoints === 21) 'Blackjack! You won.'

    if (dpoints > hpoints) {
      console.log('I won! Take that!');
    } else if (hpoints > dpoints) {
      console.log('You won.')
    } else {
      console.log('It\'s a tie!')
    }
  }
}

const game = new TwentyOneGame();
game.play();