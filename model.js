let catAPIKey = "";

let songAPIKey = null;

export class Cat {
    #data

    constructor(data) {
        this.#data = data;
    }

    static async getCat() {
        // lucky me, the images are already randomized! :3
        let response = await fetch('https://api.thecatapi.com/v1/images/search?limit=1&api_key=' + catAPIKey);

        let cat_data = await response.json();
        return new Cat(cat_data);
    }

    get imageURL () {return this.#data.url;};

}

export class Song {
    #data

    constructor(data) {
        this.#data = data;
    }

    static async getSong() {
        let response = await fetch('');

        let song_data = await response.json();
        return new Song(song_data);
    }

    get songMP3 () {return this.#data};
}

export class CatDanceModel extends EventTarget {
    #cat
    #song

    constructor () {
        super();
        this.#cat = null;
        this.#song = null;
    }

    addCat (cat) {
        this.#cat.push(cat);
        this.dispatchEvent(new Event('cat_update'));
    }

    getCat() {
        return this.#cat;
    }


    addSong (song) {
        this.#song = song;
        this.dispatchEvent(new Event('song_update'))
    }

    getSong() {
        return this.#song;
    }
}