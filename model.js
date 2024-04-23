let catAPIKey = "REPLACE W/ YOUR API KEY";

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

export class Quote {
    #data;

    constructor(data) {
        this.#data = data
    }

    static async getQuote() {
        let response = await fetch('https://quote-garden.onrender.com/api/v3/quotes');
        let quote_data = await response.json();

        let result = Math.floor(Math.random() * quote_data.data.length);

        return new Quote('"'+ quote_data.data[result].quoteText + '"' + ' - ' + quote_data.data[result].quoteAuthor);
    }

    get quote_data() {
        console.log(this.#data);
        return this.#data;
    }
}

export class CatDanceModel extends EventTarget {
    #cat;
    #quote

    constructor() {
        super();
        this.#cat = null;
        this.#quote = null;
    }

    setCat(cat) {
        this.#cat = cat;
        this.dispatchEvent(new CustomEvent('cat_update', { detail: cat }));
    }

    getCat() {
        return this.#cat;
    }

    setQuote(quote) {
        this.#quote = quote;
        this.dispatchEvent(new CustomEvent('quote_update', { detail: quote }));
    }

    getQuote() {
        return this.#quote;
    }
}
