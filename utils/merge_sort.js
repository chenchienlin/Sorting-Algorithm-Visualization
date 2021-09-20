async function mergesort(arr, speed) {
    
    var lo = 0;
    var hi = arr.length - 1;
    var aux = Array(arr.length);

    await mergesortRecursive(arr, aux, lo, hi, speed);
}

async function mergesortRecursive(arr, aux, lo, hi, speed) {

    if (hi > lo) {
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
        debugger;
        await mergesortSelectedAnimation(i, j, speed);

        if (i > mid) {
            arr[k] = aux[j];
            changeBarData(arr, k);
            j++;
            if (lo == 0 && hi == arr.length - 1) sortedAnimation(i, j);
        }
        else if (j > hi) {
            arr[k] = aux[i];
            changeBarData(arr, k);
            i++;
            if (lo == 0 && hi == arr.length - 1) sortedAnimation(i, j);
        }
        else if (aux[j] < aux[i]) {
            arr[k] = aux[j];
            changeBarData(arr, k);
            j++;
            if (lo == 0 && hi == arr.length - 1) sortedAnimation(i, j);
        }
        else {
            arr[k] = aux[i];
            changeBarData(arr, k);
            i++;
            if (lo == 0 && hi == arr.length - 1) sortedAnimation(i, j);
        }
    }
}

function changeBarData(arr, k) {

    let height = $("#svg").height(); // 450 px

    // select a rect
    var num = "rect" + k;
    selectedBar = $("#" + num);
    selectedBar.attr('y', height - arr[k]);
    selectedBar.attr('height', arr[k]);
}

async function mergesortSelectedAnimation(i, j, speed) {
    debugger;
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

function sortedAnimation(i, j) {

    var numi = "rect" + i;
    var numj = "rect" + j;

    selectedBari = $("#" + numi);
    selectedBarj = $("#" + numj);

    selectedBari.addClass("rect-sorted"); // colored selected rect
    selectedBarj.addClass("rect-sorted"); // colored selected rect
}
