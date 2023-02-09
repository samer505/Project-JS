import { Utils } from "./utils.js";

export interface AnimalType {
    htmlimg: HTMLImageElement;
    name: string;
    id: string;
    voice: string;
    img: string;
    step: number;
    chosen: boolean;
    translateX: number;

}
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


export class Animal implements AnimalType {
    [x: string]: any;
    htmlimg: HTMLImageElement;
    name: string;
    id: string;
    voice: string;
    img: string;
    step: number;
    chosen: boolean;
    translateX: number;

    constructor(htmlimg: HTMLImageElement,
        name: string,
        id: string,
        voice: string,
        img: string,
        step: number,
        chosen: boolean,
        translateX: number,
    ) {
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


