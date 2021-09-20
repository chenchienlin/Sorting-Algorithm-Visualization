
// function selection(arr){
//   var N = arr.length;
//   for (var i = 0; i < N; i++){
//     var min = i;
//     for (var j = i + 1; j < N; j++){
//       if (arr[j] < arr[min]){
//           min = j;
//       }
//     }
//     swap(arr, i, min);
//   }
// }

async function selection(arr, speed){
  var N = arr.length;
  for (var i = 0; i < N; i++){
      var min = i;
      for (var j = i + 1; j < N; j++){
          if (arr[j] < arr[min]){
              min = j;
          }
      }
      await findMinAnimation(arr, i, speed);
      
      swap(arr, i, min);
      barMin = $("#rect" + i);
      barMin.addClass('rect-sorted');
  }
}

async function findMinAnimation(arr, i, speed) {
  
  let N = arr.length;
  for (let j = i + 1; j < N; j++){

    // select a rect
    var num = "rect" + j;
    barSelected = $("#" + num);
    barSelected.addClass("rect-selected"); // colored selected rect
    await delay(speed); // wait 
    barSelected.removeClass("rect-selected");

  }
}