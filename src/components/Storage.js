const STORAGE_ITEM_NAME = 'todoItems';

export default class Storage {
    static initStorage() {
        const storageData = localStorage.getItem(STORAGE_ITEM_NAME);

        if (!storageData) {
            localStorage.setItem(STORAGE_ITEM_NAME, JSON.stringify([]));
        }
    }

    static getData() {
        const storageData = localStorage.getItem(STORAGE_ITEM_NAME);

        if (!storageData) {
            this.initStorage();
        }

        return JSON.parse(storageData);
    }

    static setData(newData) {
        localStorage.setItem(STORAGE_ITEM_NAME, JSON.stringify(newData))
    }
}