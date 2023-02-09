import { vipArray } from "./vipList.js";
const cardplace = document.getElementById('cardplace');
const resetbtn = document.getElementById('reset');
function reset() {
    vipArray.map(e => {
        let div = `<div class="card m-2" style = "width: 18rem;" >
    <img src="/images/${e.image}" class="card-img-top imgspecs">
        <div class="card-body" >
          <h5 class="card-title"> ${e.name} </h5>
        </div>
                    <li class="list-group-item"> ${Object.keys(e)[4]}:</span> ${e.country} </li>
                    <li class="list-group-item"> Birth:</span> ${e.birth_year} </li>
                    <li class="list-group-item"> ${Object.keys(e)[3]}:</span> ${e.source}</li>
                    <li class="list-group-item"> ${Object.keys(e)[1]}:</span> ${e.worth} </li>

`;
        const billcard = document.createElement("div");
        billcard.innerHTML = div;
        cardplace.appendChild(billcard);
        billcard.addEventListener('click', () => {
            vipArray.filter((e) => e.name !== e.name);
            billcard.remove();
        });
    });
}
reset();
resetbtn.addEventListener('click', () => {
    cardplace.innerHTML = '';
    reset();
});
