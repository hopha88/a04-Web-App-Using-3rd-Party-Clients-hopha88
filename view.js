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

            // changing the cat image
            try {
                let cat_picture = await this.#controller.getCat();
                if (cat_picture) {
                    this.showCatPicture(cat_picture);
                } else {
                    console.error('Failed cat pic fetch sorry </3');
                }
            } catch (error) {
                console.error('Error fetching cat picture:', error);
            }

            // changing the quote

            try {
                let quote = await this.#controller.getQuote();
                if (quote) {
                    this.showQuote(quote);
                } else {
                    console.error('Failed quote fetch sorry </3')
                }
            } catch (error) {
                console.error('Error fetching quote: ', error);
            }

        });

        this.#model.addEventListener('cat_update', (event) => {
            const cat_picture = event.detail;
            this.showCatPicture(cat_picture);
        });

        this.#model.addEventListener('song_update', (event) => {
            const quote = event.detail;
            this.showQuote(quote);
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

    showQuote(quote) {
        let meaningful_quote = document.getElementById('meaningful_quote');
        if (meaningful_quote && quote.quote_data) {
            meaningful_quote.innerText = quote.quote_data;
        }
    }
}
