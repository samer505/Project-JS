import { runners, Animal } from "./animals.js";
import { Utils } from "./utils.js";
const animalShow = document.getElementById("animal-show-case");
const winOrLoss = document.getElementById("winOrLoss");
const positonlist = document.getElementById("positonlist");
const btnstart = document.getElementById("btn-start");
const btnreset = document.getElementById("btn-reset");
const raceAllBtn = document.getElementById("btn-start-race");
let id;
let strated = false;
let winner = false;
let pic;
let ani;
raceAllBtn.addEventListener("click", () => {
    if (winner) {
        winner = !winner;
        reset();
    }
    if (!strated) {
        strated = !strated;
        const random = Utils.random(0, animalArr.length);
        const pickedAnimal = animalArr[random];
        pickedAnimal.chosen = true;
        console.log(pickedAnimal);
        pic = document.getElementById(pickedAnimal.id);
        pic.classList.add("border");
        const sound = new Audio(`./media/${pickedAnimal.voice}.wav`);
        sound.play();
        animalArr.forEach(e => {
            e.boost = Utils.random(1, 10) * 10;
        });
        id = setInterval(() => {
            animalArr.forEach((e) => {
                e.translateX += (e.boost + e.step / 30) / 15;
                ani = document.getElementById(e.id);
                ani.style.transform = `translateX(${e.translateX}px)`;
                if (ani.getBoundingClientRect().x > (document.body.getBoundingClientRect().width - 120)) {
                    console.log(e.name);
                    clearInterval(id);
                    if (pic === ani) {
                        winOrLoss.innerHTML = `You win`;
                    }
                    else {
                        winOrLoss.innerHTML = `You lose`;
                    }
                    showWinner();
                    winner = !winner;
                    strated = !strated;
                    //reset()
                }
            });
        }, 10);
    }
});
btnstart.addEventListener("click", () => {
    if (winner) {
        winner = !winner;
        reset();
    }
    if (!strated) {
        strated = !strated;
        const random = Utils.random(0, animalArr.length);
        const pickedAnimal = animalArr[random];
        pickedAnimal.chosen = true;
        console.log(pickedAnimal);
        pic = document.getElementById(pickedAnimal.id);
        pic.classList.add("border");
        const sound = new Audio(`./media/${pickedAnimal.voice}.wav`);
        sound.play();
        id = setInterval(() => {
            pickedAnimal.translateX += (Utils.random(0, 40) + pickedAnimal.step) / 10;
            ani = document.getElementById(pickedAnimal.id);
            ani.style.transform = `translateX(${pickedAnimal.translateX}px)`;
            if (ani.getBoundingClientRect().x > (document.body.getBoundingClientRect().width - 120)) {
                console.log(pickedAnimal.name);
                clearInterval(id);
                if (pic === ani) {
                    winOrLoss.innerHTML = `You win`;
                }
                else {
                    winOrLoss.innerHTML = `You lose`;
                }
                showWinner();
                winner = !winner;
                strated = !strated;
                //reset()
            }
        }, 10);
    }
});
btnreset.addEventListener("click", () => {
    reset();
});
let animalArr = [];
for (let k in runners) {
    let key = k;
    let animal = runners[key];
    const img = document.createElement("img");
    img.src = `images/${animal.img}`;
    img.classList.add('cal', 'image-fluid', "smoothmove", "reset");
    img.id = animal.id;
    animalArr.push(new Animal(img, animal.name, animal.id, animal.voice, animal.img, animal.step, false, 0));
}
animalArr.sort((a, b) => (Utils.random(0, 2) === 1 ? 1 : -1))
    .forEach((a) => {
    animalShow.appendChild(a.htmlimg);
});
function showWinner() {
    const winnerDiv = animalArr.sort((a, b) => b.translateX - a.translateX)
        .map((a, i) => ` 
          <p id=p${i + 1}> <span>#${i + 1} </span> </br>${a.name} <br> Pts: ${parseInt(a.translateX.toString())}</p> </br>`)
        .join("");
    positonlist.innerHTML = winnerDiv;
}
function reset() {
    animalArr.forEach((e) => {
        e.translateX = 0;
        e.chosen = false;
        e.htmlimg.style.transform = `translateX(0px)`;
    });
    pic.classList.remove("border");
    clearInterval(id);
    winner = false;
    strated = false;
    positonlist.innerHTML = "";
    winOrLoss.innerHTML = "";
}
