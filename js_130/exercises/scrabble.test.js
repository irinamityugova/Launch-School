let Scrabble = require('./scrabble.js');

describe("Scrabble", () => {
  test("empty word scores zero", () => {
    expect(new Scrabble('').score()).toBe(0);
  });

  xtest("whitespace scores zero", () => {
    expect(new Scrabble(" \t\n").score()).toBe(0);
  });

  xtest("nil scores zero", () => {
    expect(new Scrabble(null).score()).toBe(0);
  });

  xtest("scores very short word", () => {
    expect(new Scrabble('a').score()).toBe(1);
  });

  xtest("scores other very short word", () => {
    expect(new Scrabble('f').score()).toBe(4);
  });

  xtest("simple word scores the number of letters", () => {
    expect(new Scrabble('street').score()).toBe(6);
  });

  xtest("complicated words score more", () => {
    expect(new Scrabble('quirky').score()).toBe(22);
  });

  xtest("scores are case-insensitive", () => {
    expect(new Scrabble('OXYPHENBUTAZONE').score()).toBe(41);
  });

  xtest("convenient scoring", () => {
    expect(Scrabble.score('alacrity')).toBe(13);
  });
});