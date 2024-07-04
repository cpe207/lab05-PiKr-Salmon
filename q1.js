//660612152 ปิยวัฒน์ เครือประเสริฐ
;
;
// assign interface/type to the function definition properly
function buyItem(hero, shop) {
    /* Your code here */
    if (hero.gold >= shop.price) {
        hero.gold -= shop.price;
        hero.items.push(shop.item);
        return hero;
    }
    return hero;
}
;
//Test cases : assign proper type/interface to all objects
var hero1 = {
    items: ["sword", "potion"],
    gold: 50,
};
var shop1 = {
    item: "armor",
    price: 20,
};
var hero2 = {
    items: ["sword", "potion"],
    gold: 50,
};
var shop2 = {
    item: "legendary armor",
    price: 200,
};
console.log(buyItem(hero1, shop1));
console.log(buyItem(hero2, shop2));
module.exports = buyItem;
