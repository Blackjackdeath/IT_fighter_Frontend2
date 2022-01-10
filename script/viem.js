class Render {
    #_htmlBlock = '';
    createBlock(arr) {
        this.#_htmlBlock='';
        for (let i = 0; i < arr.length; i++) {
            this.#_htmlBlock += `<div>${i + 1}. ${arr[i]}</div>`;
        };
        return this.#_htmlBlock;
    };
    clearBlock(element) {
        element.innerHTML = '';
    }
};

export { Render };