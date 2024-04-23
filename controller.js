import { Cat } from "./model.js"; // Import the Cat class from model.js

export class CatDanceController {
    #model;

    constructor(model) {
        this.#model = model;
    }

    async getCat() {
        try {
            let cat = await Cat.getCat(); // Use the Cat class directly
            this.#model.setCat(cat);
            return cat;
        } catch (error) {
            console.error('Error fetching cat:', error);
            return null;
        }
    }
}