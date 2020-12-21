async function partition(arr, lo, hi, speed) {
    
    let p = lo; // assign low as pivot element

    for (let i = lo+1; i <= hi; i++) {
        if (arr[lo] > arr[i]) {
            p++;
            await selectedAnimation(p, speed);
            swap(arr, p, i);
        }
    }
    swap(arr, lo, p);

    return p;
}

async function quicksortRecurrsive(arr, lo, hi, speed) {

    if (hi > lo) {
        let pivot = await partition(arr, lo, hi, speed);
        await quicksortRecurrsive(arr, lo, pivot-1, speed);
        await quicksortRecurrsive(arr, pivot+1, hi, speed);
    }
}

async function quicksort(arr, speed) {

    let lo = 0;
    let hi = arr.length - 1;
    await quicksortRecurrsive(arr, lo, hi, speed);
}


/* Select pivot element
 * 
 */
async function selectedAnimation(p, speed) {
    
    var nump = "rect" + p;

    selectedBarp = $("#" + nump);

    selectedBarp.addClass("rect-selected"); // colored selected rect
    
    await delay(speed); // wait 
    selectedBarp.removeClass("rect-selected");
}

function markSorted(p) {
  
    var nump = "rect" + p;
    selectedBarp = $("#" + nump);
    selectedBarp.addClass("rect-sorted"); // colored selected rect
}