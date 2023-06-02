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

  bust() {
    return this.points > 21;
  }
}

class Dealer extends Player {
  constructor() {
    super('Dealer');
    this.secondCard;
  }

  move(deck) {
    console.log('\nHere is one of my cards. I won\'t show you the second one. Don\'t even ask!');
    this.showHit(deck.randomCard());
    this.secondCard = deck.randomCard();
    this.hit(this.secondCard);
  }
}

class Human extends Player {
  constructor() {
    super('Irina');
    this.balance = 100;
    this.bet = 5;
  }

  setBet() {
    do {
      console.log(`Your balance is $${this.balance}`);
        this.bet = rlSync.question('How much do you bet? \n');
    } while (!isNaN(this.bet) && this.balance < this.bet);
    this.bet = Number(this.bet);
    this.balance -= this.bet;
  }

  win() {
    this.balance += this.bet * 2;
    console.log(`You won. Congrats! Here is your ${this.bet * 2}. Your new balance is ${this.balance}`);
  }

  tie() {
    this.balance += this.bet;
    console.log(`It's a tie! Here is your ${this.bet}`);
  }

  move(deck) {
    let card = deck.randomCard();

    console.log(`Your card is ${card.name} ${card.suit}`);
    if (this.bust()) return;

    this.hit(card);
    this.showPoints();
  }
}

class TwentyOneGame {
  constructor() {
    this.dealer = new Dealer();
    this.human = new Human();
    this.deck = new Deck();
  }

  play() {
    this.human.setBet();
    this.dealer.move(this.deck);
    if (this.dealer.points === 21) return this.endGame();

    while(this.human.points < 21 && (this.human.points === 0 || rlSync.question('Hit or Stay? \n').match(/hit/i))) {
      this.human.move(this.deck);

      if (this.human.bust()) {
        console.log('Busted! I won.');
        return this.repeat();
      }
    }

    console.log(`My second card was ${this.dealer.secondCard.name} ${this.dealer.secondCard.suit}`);
    while(this.dealer.points < 13) {
      this.dealer.showHit(this.deck.randomCard());

      if (this.human.bust()) {
        console.log('Busted! You won.');
        return this.repeat();
      }
    }

    this.endGame();
  }

  endGame() {
    let dpoints = this.dealer.points;
    let hpoints = this.human.points;

    if (dpoints === 21) {
      console.log('Blackjack! I won.');
      return this.repeat();
    }

    console.log(`Dealer: ${dpoints}`);
    console.log(`${this.human.name}: ${hpoints}`);

    if (hpoints === 21) {
      console.log('Blackjack!');
      this.human.win();
      return this.repeat();
    }

    if (dpoints > hpoints) {
      console.log('I won! Money, money, money ~^.^~');
    } else if (hpoints > dpoints) {
      this.human.win();
    } else {
      this.human.tie();
    }
    this.repeat();
  }

  repeat() {
    if(rlSync.question('Repeat? y/n ').match(/y/i)) {
      console.clear();
      console.log('---------- New Game ----------');
      this.dealer.points = 0;
      this.human.points = 0;
      this.play();
    } else {
      console.log('Goodbye!');
    }
  }
}

const game = new TwentyOneGame();
game.play();