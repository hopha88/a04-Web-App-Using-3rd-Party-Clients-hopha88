import { Cat, Quote } from "./model.js"; // Import the Cat class from model.js

export class CatDanceController {
    #model;

    constructor(model) {
        this.#model = model;
    }

    async getCat() {
        try {
            let cat = await Cat.getCat();
            this.#model.setCat(cat);
            return cat;
        } catch (error) {
            console.error('Error fetching cat:', error);
            return null;
        }
    }

    async getQuote() {
        try {
            let quote = await Quote.getQuote();
            this.#model.setQuote(quote);
            return quote;
        } catch (error) {
            console.error('Error fetching quote:', error);
        }
    }
}