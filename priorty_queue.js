
class MinHeap {
    constructor() {
        this.items = new Array();
    }

    buildHeap(arr) {
        for (let i = parent(arr.length); i > 0; i--) {
            this.heapifyDown(i);
        }
    }

    insert(data) {
        this.items.push(data);
        this.heapifyUp(this.items.length-1);
    }

    removeMin() {
        swap(this.items, 0, this.items.length-1);
        let min = this.items.pop();
        this.heapifyDown(0);
        return min;
    }

    heapifyUp(currIdx) {
        // If the current position is not the root of the heap
        if (currIdx > 0) {
            // If current is larger than its parent, swap
            let parentIdx = this.parentIdx(currIdx);
            if (this.items[currIdx] < this.items[parentIdx]) {
                swap(this.items, currIdx, parentIdx);
                this.heapifyUp(parentIdx);
            }
        }
    }

    heapifyDown(currIdx) {
        // If the current is not a leaf
        if (this.hasAChild(currIdx)) {
            let minChildIdx = this.minChild(currIdx);
            if (this.items[currIdx] > this.items[minChildIdx]) {
                swap(this.items, currIdx, minChildIdx);
                this.heapifyDown(minChildIdx);
            }
        }
    }

    parentIdx(currIdx) {
        return Math.floor((currIdx-1)/2);
    }

    hasAChild(currIdx) {
        return 2*currIdx+1 <= this.items.length-1;
    }

    minChild(currIdx) {
        let min = 2*currIdx+1;
        // If has right child
        if (min+1 <= this.items.length) {
            // If the right child is smaller than the left child
            if (items[min+1] < items[min]) {
                min = min + 1;
            }
        }
        return min;
    }
}