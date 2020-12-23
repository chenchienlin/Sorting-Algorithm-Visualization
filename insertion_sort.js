
async function insertion(arr, speed) {
    var N = arr.length;
    for (var i = 0; i < N; i++){
        await slide(arr, i, speed);
    }

}

// slide(chartData, 2, 200);
async function slide(arr, loc, speed) {
    var temp = arr[loc];
    var j = loc;
    
    while (j > 0 && arr[j-1] > temp){
        await findInsertSpotAnimation(j, speed);
        sildeAnimation(j)
        j--;
    }
    arr[j] = temp;
    barj = $("#rect" + j);
    barj.attr('y', 500 -arr[j]);
    barj.attr('height', arr[j]);
}

async function sildeAnimation(j) {
    let height = $("#svg").height();
    arr[j] = arr[j-1];
    barj = $("#rect" + j);
    barj.attr('y', height -arr[j]);
    barj.attr('height', arr[j]);
}

async function findInsertSpotAnimation(j, speed) {
    
    var num = "rect" + j;
    barSelected = $("#" + num);
    barSelected.addClass("rect-selected"); // colored selected rect
    await delay(speed); // wait 
    barSelected.removeClass("rect-selected");
}