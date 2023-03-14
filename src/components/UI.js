import Storage from "./Storage";
import TodoItem from "./TodoItem";

export default class UI {
    displayItems() {
        const todoList = Storage.getData();
        const list = document.querySelector('[data-js="todo-list"]');

        list.innerHTML = '';

        todoList.forEach((item) => {
            list.append(new TodoItem(item.id, item.text).template())
        });
    }
}