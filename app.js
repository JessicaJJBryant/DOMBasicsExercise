// DOM BASICS EXERCISE

// 1
const portillos = document.getElementById(`portillos`);

// 2
const images = document.getElementsByTagName(`img`);

// 3
const centered = document.getElementsByClassName(`center`);

// 4
const ginosEast = document.querySelector(`div`);

// 5
const pTags = document.querySelectorAll(`p`);

// 6a
const h1 = document.querySelector(`h1`);
// 6b
h1.innerText = `Matt's Favorite Places To Eat In Sweet Home Chicago!`;

// 7a
const others = document.querySelector(`#others`);
// 7b
others.innerHTML = `<h3>Other favorites</h3>`;

// 8a
const aTag = document.querySelector(`a`);
// 8b
aTag.href = `https://www.choosechicago.com/articles/food-drink/5-classic-chicago-foods/`;

// 9
h1.classList.add(`background`, `text-color`);

// 10
h1.classList.remove(`background`);

// 11a
const h4 = document.createElement(`h4`);
// 11b
h4.innerText = `CHICAGO: A great place to eat!`;
// 11c
const body = document.querySelector(`body`);
body.prepend(h4);

// 12a
const h5 = document.createElement(`h5`);
// 12b
h5.innerText = `See you in the Windy City Sometime!`;
// 12c
aTag.insertAdjacentElement(`afterend`, h5);

// 13
const li = document.querySelector(`li`);
li.remove();


// BONUS SECTION
// 14a
const divs = document.querySelectorAll(`div`);
// 14b
for (d of divs) {
    d.classList.toggle(`background`);
}

// 15a
const hungry = [
    `Thanks`,
    `A`,
    `Lot`,
    `Now`, 
    `I`, 
    `Am`, 
    `Hungry`
];
// 15b--problems here--will try to come back around
const newSpans = document.createElement(`span`);
for (h=0; h < newSpans.length; h++) {
    newSpans[h].innerHTML = `<span>${hungry[h]} </span>`;
}
body.append(hungry);



// 15b. Using a loop, add each item from the hungry array as span elements/tags to the bottom of the document/webpage