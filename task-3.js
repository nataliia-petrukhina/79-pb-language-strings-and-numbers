let breakfastPrice = "12€";
let lunchPrice = "18.71€";
let dinnerPrice = "43.63€";


let breakfastPriceValue = parseFloat(breakfastPrice.replace('€', ''));
let lunchPriceValue = parseFloat(lunchPrice.replace('€', ''));
let dinnerPriceValue = parseFloat(dinnerPrice.replace('€', ''));


let breakfastTotal = Math.ceil(breakfastPriceValue * 1.1); 
let lunchTotal = Math.ceil(lunchPriceValue * 1.1);
let dinnerTotal = Math.ceil(dinnerPriceValue * 1.1);


console.log("Frühstück: " + breakfastTotal + "€");
console.log("Mittagsessen: " + lunchTotal + "€");
console.log("Abendessen: " + dinnerTotal + "€");
