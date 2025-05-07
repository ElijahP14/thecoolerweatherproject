const URL =
"https://iskarr.github.io/austindonovan.github.io/api/business.json";

let cards = document.querySelector("div.cards");
let para = document.createElement("p");

fetch(URL)
.then((response) => response.json())
.then((jsObject) => {
let businessList = jsObject.business;

for (let i = 0; i < businessList.length; i++) {
    let biz = businessList[i];
// console.log(business[i].name);
// You must include your javascript below to display the following information:
// 1. business names, 2.business image,
// 3. business locations, 4. business descriptions
// Here is an example for the name to start you off.

    

// Creates card and places business name in h2 element
let card = document.createElement("section");
// Adds a classname to the section element above
card.className = "card";
let h2 = document.createElement("h2");
h2.textContent = biz.name;
card.appendChild(h2);
document.querySelector("div.cards").appendChild(card);

let img = document.createElement("img");
img.src = biz.imageurl;
img.alt = `Image of ${biz.name}`;
card.appendChild(img);

let address = document.createElement("p");
address.textContent = `Location: ${biz.address}`;
card.appendChild(address);

let description = document.createElement("p");
description.textContent = `Description: ${biz.description}`;
card.appendChild(description);


document.querySelector("div.cards").appendChild(card);

console.log(biz);
// Create the image location, you can look up how to add image using javascript

// Include a business location

// Include a business Description
}
});  