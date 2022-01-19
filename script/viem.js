class Render {
    #_htmlBlock = '';
    createBlock(arr) {
        this.#_htmlBlock = '';
        for (let i = 0; i < arr.length; i++) {
            this.#_htmlBlock += `<div>${i + 1}. ${arr[i]}</div>`;
        };
        return this.#_htmlBlock;
    };
    createBlockNew(arr, element,fn) {
        this.clearBlock(element);
        for (let i = 0; i < arr.length; i++) {
            let newBlock = document.createElement('div');
            newBlock.textContent=`${i + 1}. ${arr[i]}`;
            newBlock.addEventListener('click',fn);
            element.appendChild(newBlock);
        };
    };
    clearBlock(element) {
        element.innerHTML = '';
    };
    addCountryInfo(info, elem){
        elem.textContent=info.name.official+'\n';
        if (info.capital===undefined){
            elem.textContent+='None'+'\n';
        }else{
            for (let i=0; i<info.capital.length;i++){
                elem.textContent+=info.capital[i]+',';
            };
            elem.textContent+='\n';
        };
        elem.textContent+='Population:'+info.population+'\n';
        for (let key in info.languages) {
            elem.textContent+=key+':'+info.languages[key]+'\n';
        };
    };
};

export { Render };