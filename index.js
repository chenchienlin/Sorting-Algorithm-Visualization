svg = document.getElementsByTagName("svg")[0];
let n = $("#data")[0].value; // slider value
// let n = 5;
let speed = $("#speed")[0].value; // slider value

let width = $("#svg").width();
let chartData = new Array(n);

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
};

function generateData(n){
  chartData = Array(n);
  for (var i = 0; i < n; i++){
      chartData[i] = getRandom(50, 500);
  }
}
// function generateData(n){
//   chartData = Array(n);
//   // var c = 1;  
//   var k = 0;
//   for (var i = 0; i < n; i=i+2){
//       chartData[k++] = 50*(i+1);
//   }

//   for (var i = 1; i < n; i=i+2){
//       chartData[k++] = 50*(i+1);

//   }
// }


function plotData(chartData, width){
 chartData.forEach((data, i) => {
  setTimeout(() => {
    var bar = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    bar.setAttribute('x', i * (width / n));
    bar.setAttribute('y', 500 - data);
    bar.setAttribute('height', `${data}px`);
    bar.setAttribute('width', `${width / n}px`);
    bar.setAttribute('id', "rect" + i);
    svg.appendChild(bar);
    }, i * 500*1/n);
  });
}

generateData(n);
plotData(chartData, width);

$(".run").on("click", function() {
  var val = document.getElementById("select-box").value;
  if (val == "1") {
    selection(chartData, speed);
  }
  else if (val == "2") {
    insertion(chartData, speed);
  }
  else if (val == '3') {
    mergesort(chartData, speed);  
  }
})

$(".shuffle").on("click", function(){

  // clear all setTimeout
  // This part of code is from 
  // https://stackoverflow.com/questions/8860188/javascript-clear-all-timeouts/8860203
  var id = window.setTimeout(function() {}, 0);
  while (id--) {
    window.clearTimeout(id);
  }
  
  shuffle(chartData, speed/10);  
})

var rangeInput = $("#data")[0];

rangeInput.addEventListener("change", function() { // add EventListener to number slider 
  
  n = rangeInput.value;
  
  while (svg.firstChild) { // clear all data in svg
    svg.removeChild(svg.lastChild);
  }
  generateData(n);
  plotData(chartData, width);
}, false);

var speedInput = $("#speed")[0];

speedInput.addEventListener("change", function() { // add EventListener to number slider 
  speed = speedInput.value;
}, false);

// Detect viewport change
$(window).resize(function() {
  width = $("#svg").width();// changed width
  for (var i = 0; i < n; i++){
    svg.children[i].setAttribute('x', i * (width / n));
    svg.children[i].setAttribute('width', `${width / n}px`);
  }
});