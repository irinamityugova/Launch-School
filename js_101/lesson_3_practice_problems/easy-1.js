// We have most of the Munster family in our ages object:

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
// Add entries for Marilyn and Spot to the object:

let additionalAges = { Marilyn: 22, Spot: 237 };

Object.assign(ages, additionalAges);
// console.log(ages);

/**
 * Return a new version of this sentence that ends just before the word house.
 * Don't worry about spaces or punctuation: remove everything starting from
 * the beginning of house to the end of the sentence.
 *
 */

let advice = "Few things in life are as important as house training your pet dinosaur.";
// console.log(advice.slice(0, advice.indexOf(' house')))