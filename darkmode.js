// Sets body background to black -- injecting into HTML - DOM
document.body.style.background = 'black';

// get all DOM elements
var divs = document.getElementsByTagName("div");

// iterate and set every element's background to black
for (var i = 0; i < divs.length; i++) {
   divs[i].style.background = 'black';
   // TODO: figure out color inversions
   //var color = divs[i].style.backgroundColor;
   //console.log(color);
}