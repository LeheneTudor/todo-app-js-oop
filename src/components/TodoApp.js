import Storage from './Storage';
import TodoItem from './TodoItem';
import UI from './UI';

export default class TodoApp {
    constructor() {
        this.items = Storage.getData();
        this.selectors = {
            inputText: '[data-js="input-text"]',
            item: '[data-js="item"]',
            addItem: '[data-js="add"]',
            removeItem: '[data-js="remove"]',
            form: '[data-js="form"]'
        }
    }

    addItem() {
        const textInput = document.querySelector(this.selectors.inputText);
        if(!textInput.value) return;
        const newItem = new TodoItem(crypto.randomUUID(), textInput.value);

        this.items.unshift(newItem);

        Storage.setData(this.items);

        UI.prototype.displayItems()

        textInput.value = '';
    }

    removeItem(id) {
        this.items = Storage.getData().filter(item => item.id !== id);

        Storage.setData(this.items);

        UI.prototype.displayItems()
    }

    init() {
        document.querySelector(this.selectors.form).onsubmit = (event) => {
            event.preventDefault();
            this.addItem();
        }

        document.addEventListener('click', (event) => {
            if (event.target.dataset.js === 'remove') {
                const id = event.target.parentElement.dataset.id;

                this.removeItem(id)
            };
        })

        UI.prototype.displayItems()
    }
}