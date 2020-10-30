svg = document.getElementsByTagName("svg")[0];
let n = $(".slider")[0].value; // slider value
let width = $("#svg").width();
// let width = window.innerWidth;
// alert(width)
function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
};

let chartData = new Array(n);

function generateData(n){
  chartData = Array(n);
  for (var i = 0; i < n; i++){
      chartData[i] = getRandom(50, 500);
  }
}


function plotData(chartData, width){
 chartData.forEach((data, i) => {
  setTimeout(() => {
    var bar = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    bar.setAttribute('x', i * (width / n));
    bar.setAttribute('y', 500 - data);
    bar.setAttribute('height', `${data}px`);
    bar.setAttribute('width', `${width / n}px`);
    svg.appendChild(bar);
    }, i * 500*1/n);
  });
}

generateData(n);
plotData(chartData, width);

function swap(arr, i, j){
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    bari = document.getElementsByTagName("rect")[i];
    barj = document.getElementsByTagName("rect")[j];

    bari.setAttribute('y', 500 - arr[i]);
    bari.setAttribute('height', `${arr[i]}px`);

    barj.setAttribute('y', 500 - arr[j]);
    barj.setAttribute('height', `${arr[j]}px`);
}

// Knuth shuffle. 
// This part of code can refer to Algorithms 4th Edition by Robert Sedgewick
function shuffle(arr){
  let n = arr.length;
  for (let i = 0; i < n; i++){
    window.setTimeout(function() {
        let r = getRandom(0, n-1); // between 0 and i
        swap(arr, i, r);
        var temp1 = $("rect")[i];
        temp1.removeAttribute('class', 'rect-sorted');
      }, i * 500*1/n); 
  }

}
// function selection(arr){
//     var N = arr.length;
//     for (let i = 0; i < N; i++){
//       window.setTimeout(function() {
//         let min = i;
//         for (let j = i + 1; j < N; j++){
//             if (arr[j] < arr[min]){
//                 min = j;
//             }
//         }
//         alert(arr[min]);
//       // console.log(arr[min])  
//       }, 1000 * i);
//     }
//         // barmin = document.getElementsByTagName("rect")[min];
//         // barmin.setAttribute('class', 'rect-min');
//         // swap(arr, i, min);
// }
function selection(arr){
    let n = arr.length;
    for (let i = 0; i < n; i++){
      window.setTimeout(function() {
        let min = i;
        for (let j = i + 1; j < n; j++){
            if (arr[j] < arr[min]){
                min = j;
            }
        }
        // console.log(arr[min])
        swap(arr, i, min);
        barmin = document.getElementsByTagName("rect")[i];
        barmin.setAttribute('class', 'rect-sorted');
      }, i*10);  
    }
}
// function selection(arr){
//     var N = arr.length;
//     for (var i = 0; i < N; i++){
//         var min = i;
//         for (var j = i + 1; j < N; j++){
//             if (arr[j] < arr[min]){
//                 min = j;
//             }
//         }
//         console.log(arr[min])
//         // barmin = document.getElementsByTagName("rect")[min];
//         // barmin.setAttribute('class', 'rect-min');
//         swap(arr, i, min);
//     }
// }
$(".run").on("click", function(){
  var val = document.getElementById("select-box").value;
  if (val == "1"){
    selection(chartData);  
  }
})

$(".shuffle").on("click", function(){
    shuffle(chartData);  
})

var rangeInput = $(".slider")[0];

rangeInput.addEventListener("change", function() { // add EventListener to number slider 
  
  n = rangeInput.value;
  
  while (svg.firstChild) { // clear all data in svg
    svg.removeChild(svg.lastChild);
  }
  generateData(n);
  plotData(chartData, width);
}, false);

// Detect viewport change
$(window).resize(function() {
  width = $("#svg").width();// changed width
  for (var i = 0; i < n; i++){
    svg.children[i].setAttribute('x', i * (width / n));
    svg.children[i].setAttribute('width', `${width / n}px`);
  }
});