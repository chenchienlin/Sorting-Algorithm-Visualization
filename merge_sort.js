function domerge(arr) {
    
    let lo = 0;
    let hi = arr.length - 1;
    let mid = Math.floor((lo + hi)/2);
    let aux = Array(arr.length);

    for (let k = lo; k <= hi; k++) {
        aux[k] = arr[k];
    }
    merge(arr, aux, lo, mid, hi, speed);
}

async function mergesort(arr, speed) {
    
    var lo = 0;
    var hi = arr.length - 1;
    var aux = Array(arr.length);

    await mergesortRecursive(arr, aux, lo, hi, speed);
}

async function mergesortRecursive(arr, aux, lo, hi, speed) {
    if (hi > lo) {
        // debugger;
        var mid = Math.floor((lo + hi)/2);
        await mergesortRecursive(arr, aux, lo, mid, speed);
        await mergesortRecursive(arr, aux, mid+1, hi, speed);
        await merge(arr, aux, lo, mid, hi, speed);
    }
}

async function merge(arr, aux, lo, mid, hi, speed) {

    for (var k = lo; k <= hi; k++) {
        aux[k] = arr[k];
    }

    var i = lo, j = mid + 1;

    for (var k  = lo; k <= hi; k++) {
        
        auxi = aux[i];
        auxj = aux[j];
<<<<<<< HEAD
        await selectedAnimation(i, j, speed);

        if (i > mid) {
            arr[k] = aux[j];
            changeBarData(arr, k);
            if (lo == 0 && hi == arr.length - 1) sortedAnimation(i, j);
            j++;
        }
        else if (j > hi) {
            arr[k] = aux[i];
            changeBarData(arr, k);
            if (lo == 0 && hi == arr.length - 1) sortedAnimation(i, j);
            i++;
        }
        else if (aux[j] < aux[i]) {
            arr[k] = aux[j];
            changeBarData(arr, k);
            if (lo == 0 && hi == arr.length - 1) sortedAnimation(i, j);
            j++;
        }
        else {
            arr[k] = aux[i];
            changeBarData(arr, k);
            if (lo == 0 && hi == arr.length - 1) sortedAnimation(i, j);
            i++;
=======
        await selectAnimation(i, j, speed);

        if (i > mid) {
            arr[k] = aux[j];
            j++;
            changeBarData(arr, k);
        }
        else if (j > hi) {
            arr[k] = aux[i];
            i++;
            changeBarData(arr, k);
        }
        else if (aux[j] < aux[i]) {
            arr[k] = aux[j];
            j++;
            changeBarData(arr, k);
        }
        else {
            arr[k] = aux[i];
            i++;
            changeBarData(arr, k);
>>>>>>> ff02e4f9df0c241bb03646e41d9d2fb704963338
        }
    }
}

function changeBarData(arr, k) {
    
    // select a rect
    var num = "rect" + k;
    selectedBar = $("#" + num);
    selectedBar.attr('y', 500 - arr[k]);
    selectedBar.attr('height', arr[k]);
}

<<<<<<< HEAD
async function selectedAnimation(i, j, speed) {
=======
async function selectAnimation(i, j, speed) {
>>>>>>> ff02e4f9df0c241bb03646e41d9d2fb704963338
    
    var numi = "rect" + i;
    var numj = "rect" + j;

    selectedBari = $("#" + numi);
    selectedBarj = $("#" + numj);

    selectedBari.addClass("rect-selected"); // colored selected rect
    selectedBarj.addClass("rect-selected"); // colored selected rect
    
    await delay(speed); // wait 
    selectedBari.removeClass("rect-selected");
    selectedBarj.removeClass("rect-selected");

<<<<<<< HEAD
}

function sortedAnimation(i, j) {
    var numi = "rect" + i;
    var numj = "rect" + j;

    selectedBari = $("#" + numi);
    selectedBarj = $("#" + numj);

    selectedBari.addClass("rect-sorted"); // colored selected rect
    selectedBarj.addClass("rect-sorted"); // colored selected rect
=======
>>>>>>> ff02e4f9df0c241bb03646e41d9d2fb704963338
}