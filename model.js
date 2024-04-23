let catAPIKey = "REPLACE";

let songAPIKey = "REPLACE";

export class Cat {
    #data;

    constructor(data) {
        this.#data = data;
    }

    static async getCat() {
        let response = await fetch('https://api.thecatapi.com/v1/images/search?limit=1&api_key=' + catAPIKey);
        let cat_data = await response.json();
        return new Cat(cat_data[0]); // Since the response is an array, take the first item
    }

    get imageURL() {
        return this.#data.url;
    }

}

export class CatDanceModel extends EventTarget {
    #cat;

    constructor() {
        super();
        this.#cat = null;
    }

    setCat(cat) {
        this.#cat = cat;
        this.dispatchEvent(new CustomEvent('cat_update', { detail: cat }));
    }

    getCat() {
        return this.#cat;
    }
}