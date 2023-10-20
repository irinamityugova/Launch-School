let animals = {
  a: 'ant',
  b: 'bear',
  c: 'catterpillar'
};

function forEachKey(obj, cb) {
  for(let key in obj) {
    cb(key);
  }
}

forEachKey(animals, (key) => {
  console.log(key, '-', animals[key]);
});
