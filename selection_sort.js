
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

function selection(arr, speed){
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
        barMin = $("#rect" + i);
        // barSelected.attr("class", "rect-sorted")
        barMin = document.getElementsByTagName("rect")[i];
        barMin.setAttribute('class', 'rect-sorted');
      }, i*speed);  
    }
}  

// function findMin(arr, min, j, speed){
//   // Base case
//   if (j > arr.length)
//     return;

//   var num = "rect" + j;
//   barSelected = $("#" + num);

//   barSelected.attr("class", "rect-selected")
//   // barSelected.removeAttribute('class', 'rect-selected');
//   if (arr[j] < arr[min]){
//     min = j;
//     }
//   if (j)  
//   console.log(arr[min]);
//   setTimeout(() => findMin(j + 1, speed), speed);
// }
// helper function

var delayed = (function() {
  var queue = [];

  function processQueue() {
    if (queue.length > 0) {
      setTimeout(function () {
        queue.shift().cb();
        processQueue();
      }, queue[0].delay);
    }
  }

  return function delayed(delay, cb) {
    queue.push({ delay: delay, cb: cb });

    if (queue.length === 1) {
      processQueue();
    }
  };
}());

// function selection2(){

// let arr = chartData;
// let i = 0, j, max = arr.length;
// for (; i < max; i += 1) {
//   let min = i;
//   for (j = i+1; j < max; j += 1) {
//     // add function to the queue, shadowing i/j with an IIFE:
//     delayed(2000, function(i, j, min) {
//       return function() {
//         // debugger;
//         // let min = i;
//         var num = "rect" + j;
//         barSelected = $("#" + num);
//         barSelected.attr("class", "rect-selected");
//         setTimeout('barSelected.removeAttr("class", "rect-selected");',1000); 
//          console.log("arr[j] :", arr[j] )
//           console.log("arr[min] :", arr[min] )
//         if (arr[j] < arr[min]){
//               min = j;
//           // console.log("arr[j] :", arr[j] )
//           // console.log("arr[min] :", arr[min] )
//           console.log("min", arr[min])

//         }
//         console.log(j);
//         if (j == arr.length-1){
//           console.log("swap", j, min)
//           swap(arr, i, min);
//           barMin = document.getElementsByTagName("rect")[i];
//           barMin.setAttribute('class', 'rect-sorted');
//         }
//         // barSelected.removeAttr("class", "rect-selected");
//         // console.log(i, j);

//       };
//     }(i, j, min));
//   }
// }
// }



// for (; i < max; i += 1) {
//   for (j = 0; j < max; j += 1) {
//     // add function to the queue, shadowing i/j with an IIFE:
//     delayed(1000, function(arr, i, j) {
//       return function() {
//         // console.log(i, j);
//         // let min = i;
//         // var num = "rect" + j;
//         // barSelected = $("#" + num);
//         // barSelected.attr("class", "rect-selected")
//         // if (arr[j] < arr[min]){
//         //       min = j;
//         // }
//         // if (j == arr.length-1){
//         //   swap(arr, i, min);
//         //   barMin = $("#" + i);
//         //   barSelected.attr("class", "rect-sorted")
//         // }
//         console.log(i,j);
//       };
//     }(i, j));
//   }
// }