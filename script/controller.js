class Controller {
    #_data;
    #_resultSearch = [];
    constructor(data) {
        this.#_data = data;
    };
    searchRegionAndName(region, searchName) {
        this.#_resultSearch=[];
        for (let i = 0; i < this.#_data.length; i++) {
            if (region === 'All') {
                if (this.#_data[i].name.official.toLowerCase().indexOf(searchName.toLowerCase()) > -1) {
                    this.#_resultSearch.push(this.#_data[i].name.official)
                };
            } else {
                if ((region === this.#_data[i].region) && (this.#_data[i].name.official.toLowerCase().indexOf(searchName.toLowerCase()) > -1)) {
                    this.#_resultSearch.push(this.#_data[i].name.official)
                };
            };
        };
        return this.#_resultSearch;
    };
    getCountriInfo(name){
        let i=0;
        let arr=name.split(' ');
        arr.shift();
        name=arr.join(' ');
        console.log(name);
        while(i<this.#_data.length){
            if (this.#_data[i].name.official===name){
                console.log(this.#_data[i]);
                return this.#_data[i];
            };
            i++;
        };
    };
};

export {Controller}