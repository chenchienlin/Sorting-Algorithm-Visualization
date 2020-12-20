
async function delay(speed) {
  return new Promise(resolve => setTimeout(resolve, speed));
}

function swap(arr, i, j){

  let height = $("#svg").height(); // 450 px
  // swap values in array  
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;

  // change rects attributes
  bari = $("#rect" + i);
  barj = $("#rect" + j);
  bari.attr('y', height -arr[i]);
  bari.attr('height', arr[i]);
  barj.attr('y', height -arr[j]);
  barj.attr('height', arr[j]);
}

function clearsetTimeout() {
  // clear all setTimeout
  // This part of code is from 
  // https://stackoverflow.com/questions/8860188/javascript-clear-all-timeouts/8860203
  var id = window.setTimeout(function() {}, 0);
  while (id--) {
    window.clearTimeout(id);
  }
}

// Knuth shuffle. 
// This part of code can refer to Algorithms 4th Edition by Robert Sedgewick
// function shuffle(arr){
//   let n = arr.length;
//   for (let i = 0; i < n; i++){
//     window.setTimeout(function() {
//         let r = getRandom(0, n-1); // between 0 and i
//         swap(arr, i, r);
//         var temp1 = $("rect")[i];
//         temp1.removeAttribute('class', 'rect-sorted');
//       }, i * 500*1/n); 
//   }

// }

async function shuffle(arr, speed){
  let n = arr.length;
  for (let i = 0; i < n; i++){
    let r = getRandom(0, n-1); // between 0 and i
    await delay(speed);
    swap(arr, i, r);
    var temp1 = $("rect")[i];
    temp1.removeAttribute('class', 'rect-sorted');
  }
}