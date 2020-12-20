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

async function selectAnimation(i, j, speed) {
    
    var numi = "rect" + i;
    var numj = "rect" + j;

    selectedBari = $("#" + numi);
    selectedBarj = $("#" + numj);

    selectedBari.addClass("rect-selected"); // colored selected rect
    selectedBarj.addClass("rect-selected"); // colored selected rect
    
    await delay(speed); // wait 
    selectedBari.removeClass("rect-selected");
    selectedBarj.removeClass("rect-selected");

}