svg = document.getElementsByTagName("svg")[0];
let n = $("#data")[0].value; // slider value
let speed = $("#speed")[0].value; // slider value

let width = $("#svg").width();
let height = $("#svg").height(); // 450 px
let chartData = new Array(n);

let pq = new MinHeap();
pq.insert(1);
pq.insert(-1);
pq.insert(2);
pq.insert(-2);
pq.insert(0);
pq.insert(10);


function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
};

function generateData(n){
  chartData = Array(n);
  for (var i = 0; i < n; i++){
      chartData[i] = getRandom(height/10, height); // values from 45 to 450 
  }
}

function plotData(chartData, width){
 chartData.forEach((data, i) => {
  setTimeout(() => {
    var bar = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    bar.setAttribute('x', i * (width / n));
    bar.setAttribute('y', height - data);
    bar.setAttribute('height', `${data}px`);
    bar.setAttribute('width', `${width / n}px`);
    bar.setAttribute('id', "rect" + i);
    svg.appendChild(bar);
    }, i * speed);
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
  else if (val == '4') {
    quicksort(chartData, speed);
  }
})

$(".shuffle").on("click", function(){
  clearsetTimeout();
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