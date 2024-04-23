export class CatDanceController {
    #model
    #view

    constructor (model) {
        this.#model = model;
        this.#view = null;
    }

    connectView(view) {
        this.#view = view;
    }
}