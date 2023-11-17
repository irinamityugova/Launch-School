// Write a program that can generate the lyrics of the 99 Bottles of Beer song. See the test suite for the entire song.



// BeerSong.lyrics() whole song
/*
Lyrics
------------------
99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.


1 bottle of beer on the wall, 1 bottle of beer.
Take it down and pass it around, no more bottles of beer on the wall.


No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
-------------------

`${n} bottles of beer on the wall, ${n} bottles of beer.
Take one down and pass it around, ${n-1} bottles of beer on the wall.\n`
*/

// BeerSong.verses(start, end)
/*
If only start, return one verse at n === start;
End is included
Print verces from start to end included
*/

/*
D

[String, String]
*/

module.exports = class BeerSong {
// class BeerSong {
  static song = (function makeSong() {
    let lyrics = [];
    for (let n = 99; n >= 0; n--) {
      switch (n) {
        case 0:
          lyrics.push("No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n");
          break;
        case 2:
          lyrics.push("2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n");
          break;
        case 1:
          lyrics.push("1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n");
          break;
        default:
          lyrics.push(`${n} bottles of beer on the wall, ${n} bottles of beer.\nTake one down and pass it around, ${n-1} bottles of beer on the wall.\n`);
      }
    }
    return lyrics;
  })()

  static lyrics() {
    return BeerSong.song.join('\n');
  }

  static verse(start) {
      return BeerSong.verses(start, start, '\n\n');
  }

  static verses(start, end, delimiter = '\n') {
    let i = 99 - start;
    let k = 100 - end;
      return BeerSong.song.slice(i, k).join(delimiter);
  }
};


