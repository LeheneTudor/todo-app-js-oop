export default class TodoItem {
    constructor(id, text) {
        this.id = id
        this.text = text
    }

    template() {
        const div = document.createElement('div');
        div.dataset.id = this.id;
        div.classList.add('todo__item');
        div.innerHTML = `<p class="todo__item-text">${this.text}</p>
        <button class="todo__item-remove" data-js="remove">X</button>`;

        return div;
    }
}