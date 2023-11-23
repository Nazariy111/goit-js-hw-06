class Storage {
    #items;

    constructor(items) {
        this.#items = items;
    }

    getItems() {
        return this.#items;
    }

    addItem(newItem) {
        this.#items.push(newItem);
    }

    removeItem(itemToRemove) {
        const indexOfRemovingItem = this.#items.indexOf(itemToRemove);
        indexOfRemovingItem >= 0 ? this.#items.splice(indexOfRemovingItem, 1) : console.log(`${itemToRemove} not found!`);
        }
}


const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
storage.removeItem("SomeProduct"); // "SomeProduct not found!"
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]