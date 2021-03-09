const btn = document.getElementById("btn");
// array of numbers and leters that make up a hex color
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];


function randomHexColor(e) {

 let hexColor = '#';
 // loop through six times the hex array to select a random element
 for(let i = 0; i < 6; i++){
  hexColor += hex[Math.floor(Math.random() * hex.length)]
 }
  
  document.getElementById("content").style.backgroundColor = hexColor;
  document.getElementById("color").innerText = hexColor;
}

btn.addEventListener("click", randomHexColor);
