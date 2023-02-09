import { Utils } from "./utils.js";
const arrinput = document.getElementById('arrinput');
const userarrbtn = document.getElementById('userarrbtn');
const ioobtn = document.getElementById('o-ioo');
const cuttothreebtn = document.getElementById('cuttothreebtn');
const sortbtn = document.getElementById('sortbtn');
const cleartbtn = document.getElementById('cleartbtn');
const correntarr = document.getElementById('correntarr');
const sortedthree = document.getElementById('sortedthree');
let arr = [23, 3, 45, 34, 2, 6];
Utils.bubbleSort(arr);
console.log(arr);
let numberArr = [];
const reg = /^[0-9\s]*$/;
function showArrOnScreen(arr) {
    correntarr.innerHTML = '';
    numberArr.forEach((v) => {
        correntarr.innerHTML += v.toString() + " ";
    });
}
userarrbtn.addEventListener('click', () => {
    if (arrinput.value.match(reg)) {
        const arrInput = arrinput.value.split(" ");
        const arr = [...arrInput];
        numberArr = arr.map(Number);
        showArrOnScreen(numberArr);
    }
    else {
        alert("please enter only numbers!");
    }
});
ioobtn.addEventListener('click', () => {
    const random = Utils.random(0, 101);
    numberArr.push(random);
    showArrOnScreen(numberArr);
});
sortbtn.addEventListener('click', () => {
    Utils.bubbleSort(numberArr);
    showArrOnScreen(numberArr);
});
cleartbtn.addEventListener('click', () => {
    // window.location.reload();
    correntarr.innerHTML = "";
    sortedthree.innerHTML = "";
    numberArr = [];
});
cuttothreebtn.addEventListener('click', () => {
    let smallArr = [];
    let medArr = [];
    let largeArr = [];
    numberArr.forEach(e => {
        if (e <= 30) {
            smallArr.push(e);
        }
        else if (e >= 60) {
            largeArr.push(e);
        }
        else {
            medArr.push(e);
        }
    });
    const smallText = smallArr.length == 0 ? `All digits are bigger than 30.` : `${smallArr}<br>You have ${smallArr.length} small #.<br><br><br><br>`;
    const medText = medArr.length == 0 ? `All digits are smaller than 30 OR bigger than 60.` : `${medArr}<br>You have ${medArr.length} Med #.<br><br><br><br>`;
    const largeText = largeArr.length == 0 ? `All digits are smaller than 61.` : `${largeArr}<br>You have ${largeArr.length} Large #.`;
    Utils.bubbleSort(smallArr);
    Utils.bubbleSort(medArr);
    Utils.bubbleSort(largeArr);
    //if (smallArr.length === 0 || medArr.length === 0 || largeArr.length === 0) {
    sortedthree.innerHTML = (smallArr.length === 0 && medArr.length === 0 && largeArr.length === 0) ? `You have No numbers` : `<br>${smallText}<br>${medText}<br>${largeText}`;
});
