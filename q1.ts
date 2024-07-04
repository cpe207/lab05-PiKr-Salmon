//660612152 ปิยวัฒน์ เครือประเสริฐ

// define interface for Hero and Shop objects
interface Hero {
  items : string[];
  gold : number;
}

interface Shop {
  items : string;
  price : number;
}

// assign interface/type to the function definition properly
function buyItem(hero : Hero, shop : Shop) {
  /* Your code here */
  if (hero.gold >= shop.price) {
    hero.gold -= shop.price;
    hero.items.push(shop.items);
    return hero;
  } 
  return hero;
};

//Test cases : assign proper type/interface to all objects
const hero1 = {
  items: ["sword", "potion"],
  gold: 50,
};

const shop1 = {
  items: "armor",
  price: 20,
};

const hero2 = {
  items: ["sword", "potion"],
  gold: 50,
};

const shop2 = {
  items: "legendary armor",
  price: 200,
};

console.log(buyItem(hero1, shop1));
console.log(buyItem(hero2, shop2));

module.exports = buyItem;

