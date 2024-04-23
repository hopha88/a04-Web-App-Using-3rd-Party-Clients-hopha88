export class CatDanceView {
    #model;
    #controller;

    constructor(model, controller) {
        this.#model = model;
        this.#controller = controller;

        this.#render();
    }

    hideAll() {
        document.querySelectorAll('body > div').forEach(top_ui_div => top_ui_div.style.display = 'none');
    }

    #render() {
        let cat_button = document.getElementById('cat_fetcher');

        var meow_mp3 = new Audio();
        meow_mp3.src = "meows.mp3"
        meow_mp3.oncanplaythrough = function () {
            meow_mp3.mrow = true;
        }

        cat_button.addEventListener('click', async () => {
            if (meow_mp3 && meow_mp3.mrow) {
                meow_mp3.currentTime = 0;
                meow_mp3.play();
            }
            try {
                let cat_picture = await this.#controller.getCat(); // Request cat picture from controller
                if (cat_picture) {
                    this.showCatPicture(cat_picture);
                } else {
                    console.error('Failed to fetch cat picture');
                }
            } catch (error) {
                console.error('Error fetching cat picture:', error);
            }
        });

        this.#model.addEventListener('cat_update', (event) => {
            const cat_picture = event.detail;
            this.showCatPicture(cat_picture);
        });

        this.#model.addEventListener('song_update', () => {
            
                });

    }

    showCatPicture(cat_picture) {
        let cat_holder = document.getElementById('cat_holder');
        if (cat_picture && cat_picture.imageURL) {
            cat_holder.src = cat_picture.imageURL;
        } else {
            console.error('Invalid cat data:', cat_picture);
        }
    }
}
