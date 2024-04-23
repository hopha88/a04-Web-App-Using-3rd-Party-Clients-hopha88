export class CatDanceView {
    #model
    #controller

    constructor(model, controller) {
        this.#model = model;
        this.#controller = controller;

        this.#render();
    }

    #render() {
        let cat_button = document.getElementById('cat_fetcher');

        var meow_mp3 = new Audio();
        meow_mp3.src = "meows.mp3"
        meow_mp3.oncanplaythrough = function () {
            meow_mp3.mrow = true;
        }

        cat_button.addEventListener('click', () => {
            // play a cat meow audio
            if (meow_mp3 && meow_mp3.mrow) {
                meow_mp3.currentTime = 0;
                meow_mp3.play();
            }
            // load the cat image into the holder
            cat.src = this..getCat();

        })

        this.#model.addEventListener('cat_update', this.showCatPicture())

        this.#model.addEventListener('song_update', () => {

        })

    }

    async showCatPicture() {
        this.hideAll();
        let cat_holder = document.getElementById('cat_holder');

        let cat_picture = await Cat.getCat();

        cat_holder.src = cat_picture.imageURL;


    }
}

/* Resources:
    - Formatting button audio file:
        https://stackoverflow.com/questions/34254616/addeventlistener-sound-on-click
    - Cat sound effect:
        https://www.youtube.com/watch?v=IeUfgC-RHZ0
*/