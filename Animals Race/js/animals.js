export const runners = {
    dog: {
        "name": "dog",
        "id": "dog",
        "voice": "woof",
        "img": "dog.png",
        "step": 50
    },
    horse: {
        "name": "horse",
        "id": "horse",
        "voice": "neigh",
        "img": "horse.png",
        "step": 70
    },
    duck: {
        "name": "duck",
        "id": "duck",
        "voice": "quack",
        "img": "duck.png",
        "step": 40
    },
    chick: {
        "name": "chick",
        "id": "chick",
        "voice": "cheap",
        "img": "chick.png",
        "step": 30
    }
};
export class Animal {
    htmlimg;
    name;
    id;
    voice;
    img;
    step;
    chosen;
    translateX;
    constructor(htmlimg, name, id, voice, img, step, chosen, translateX) {
        this.htmlimg = htmlimg;
        this.name = name;
        this.id = id;
        this.voice = voice;
        this.img = img;
        this.step = step;
        this.chosen = chosen;
        this.translateX = translateX;
    }
}
