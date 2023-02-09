import { Color, capRGB } from "./color.js";
const redInput = document.getElementById("red-input");
const greenInput = document.getElementById("green-input");
const blueInput = document.getElementById("blue-input");
const box = document.getElementById("box");
const compbtn = document.getElementById("compbtn");
const savebtn = document.getElementById("savebtn");
const compbox = document.getElementById("compbox");
const savebox = document.getElementById("savebox");
let favoritesArr = [];
const allInputs = [redInput, greenInput, blueInput];
function loadfavcolor() {
    let savebox = localStorage.getItem('colors');
    if (!savebox)
        return;
    let colorsFromDisk = JSON.parse(localStorage.getItem('colors'));
    colorsFromDisk = colorsFromDisk.map((c) => new Color(c.r, c.g, c.b));
    favoritesArr = colorsFromDisk;
    console.log(favoritesArr);
    renderColors();
}
const renderColors = () => {
    savebox.innerHTML = '';
    favoritesArr.forEach((e) => {
        let newc = document.createElement("div");
        newc.innerHTML = `${e.rgb()} <br> ${e.hex()};`;
        newc.style.background = e.rgb();
        newc.classList.add('savecolorbox');
        savebox.appendChild(newc);
        newc.addEventListener('click', () => {
            let index = favoritesArr.findIndex((val) => val.id === e.id);
            console.log(e.id);
            favoritesArr.splice(index, 1);
            newc.remove();
            localStorage.setItem('colors', JSON.stringify(favoritesArr));
        });
    });
    /*savebox.innerHTML += `
    <div class="savecolorbox" style="background: ${e.rgb()};">
      ${e.rgb()}<br>${e.hex()}
    </div>
    `
   */
};
function rgb() {
    const [red, green, blue] = capRGB(Number(redInput.value), Number(greenInput.value), Number(blueInput.value));
    const c = new Color(red, green, blue);
    const hexColor = c.hex();
    const rgbColor = c.rgb();
    box.innerHTML = rgbColor + "<br>" + hexColor;
    box.style.background = rgbColor;
    return c;
}
allInputs.forEach((i) => {
    i.addEventListener("input", () => {
        const c = rgb();
        rgb();
        compbtn.addEventListener('click', () => {
            compbox.style.background = c.rgb();
            compbox.innerHTML = c.rgb() + "<br>" + c.hex();
        });
    });
});
savebtn.addEventListener('click', () => {
    const newColor = document.createElement("div");
    const [red, green, blue] = capRGB(Number(redInput.value), Number(greenInput.value), Number(blueInput.value));
    const c = new Color(red, green, blue);
    console.log(c.id);
    favoritesArr.push(c);
    const hexColor = c.hex();
    const rgbColor = c.rgb();
    newColor.innerHTML = rgbColor + "<br>" + hexColor;
    newColor.style.background = rgbColor;
    newColor.classList.add('savecolorbox');
    localStorage.setItem('colors', JSON.stringify(favoritesArr));
    newColor.addEventListener('click', () => {
        let index = favoritesArr.findIndex((val) => val.id === c.id);
        console.log(c.id);
        favoritesArr.splice(index, 1);
        newColor.remove();
        localStorage.setItem('colors', JSON.stringify(favoritesArr));
    });
    savebox.appendChild(newColor);
});
loadfavcolor();
