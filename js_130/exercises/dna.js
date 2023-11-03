// Write a program that can calculate the Hamming distance between two DNA strands.

// Hamming distance is the minimum number of mutations between two homologous strands. If the lengths are different, compute over the shorter strand.

// GAGCCTACTAACGGGAT
// CATCGTAATGACGGCCT
// => 7

module.exports = class DNA {
  constructor(sequence) {
    this.sequence = sequence;
  }

  hammingDistance(sequence2) {
    let minLength;
    if(this.sequence.length <= sequence2.length) {
      minLength = this.sequence.length;
    } else {
      minLength = sequence2.length;
    }

    let count = 0;
    for (minLength; minLength > 0; minLength -= 1) {
      let i = minLength - 1;
      if(this.sequence[i] !== sequence2[i]) count++;
    }

    return count;
  }
}