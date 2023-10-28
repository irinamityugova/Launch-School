const ItemManager = (function() {
  let items = {};

  function validate(name, category, quantity) {
    if(quantity === undefined || name.split(' ').join().length < 5 || category.split(' ').length > 1 || category.length < 5) return false;
    return true;
  }

  function makeSKU(name, category) {
    return name.split(' ').join('').slice(0, 3).concat(category.slice(0, 2)).toUpperCase();
  }

  return {
    items: [],

    create(name, category, quantity) {
      if(!validate(name, category, quantity)) return false;
      let skuCode = makeSKU(name, category);
      items[skuCode] = {
        skuCode,
        name,
        category,
        quantity,
      };
      console.log(`added ${name}`);
      this.items.push(name);
      console.log('items', this.items);
    },

    update(SKU, object) {
      Object.keys(object).forEach((key) => items[SKU][key] = object[key]);
      return items;
    },

    delete(SKU) {
      this.items = this.items.filter(item => item !== items[SKU].name);
      delete items[SKU];
      return this.items;
    },

    inStock() {
      let list = Object.values(items).filter(item => item.quantity > 0).map(item => item.name).join();
      console.log('inStock:', list);
    },

    itemsInCategory(category) {
      return category + ": " + Object.values(items).filter(item => item.category === category).map(item => item.name).join(", ");
    },

    findItem(SKU) {
      if (items[SKU] === undefined) return null;
      return items[SKU];
    },
  };
})();

const ReportManager = (function() {
  return {
    init(ItemManager) {
      this.items = ItemManager;
    },

    createReporter(SKU) {
      let item = this.items.findItem(SKU);
      return {
        itemInfo() {
          if (item) {
            Object.entries(item).forEach(pair => console.log(`${pair[0]}: ${pair[1]}`));
          } else {
            console.log(`Product ${SKU} does not exist`);
          }
        },
      };
    },

    reportInStock() {
      this.items.inStock();
    },

  };
})();

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
console.log();

ItemManager.items; // returns list with the 4 valid items

ReportManager.init(ItemManager);
ReportManager.reportInStock(); // logs soccer ball,football,kitchen pot
console.log();

ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot

ItemManager.inStock(); // football,kitchen pot
ReportManager.reportInStock(); // football,kitchen pot
console.log();


console.log(ItemManager.itemsInCategory('sports')); // logs a list with the item objects for basket ball, soccer ball, and football

console.log();

ItemManager.delete('SOCSP'); // returns list the remaining 3 valid items (soccer ball is removed from the list)

console.log('Remaining items,', ItemManager.items);
console.log();

let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3
console.log();

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10