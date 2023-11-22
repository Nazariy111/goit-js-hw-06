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
        this.#items.splice(indexOfRemovingItem, 1);
    }
}

//питання: як тільки відкриваю консоль, то результат невірний, але після того як оновлюю сторінку вже видає
//вірні масиви. В чому проблема? як її позбавитися? чи так і має бути?
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]