
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