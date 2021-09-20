
class MinHeap {
    constructor(arr) {
        if (!arguments.length) {
            this.items = new Array();
        }
        else {
            this.items = arr;
        }
    }

    async heapSort(speed) {
        let N = this.items.length;
        this.buildHeap();
        while (N > 0) {
            swap(this.items, 0, N-1);
            this.heapifyDown(0, --N);
            await delay(speed);
        }
        await this.reverse(speed);
    }

    buildHeap() {
        for (let i = this.parentIdx(this.items.length); i >= 0; i--) {
            this.heapifyDown(i, this.items.length);
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

    heapifyDown(currIdx, N) {
        // If the current is not a leaf
        if (this.hasAChild(currIdx, N)) {
            let minChildIdx = this.minChild(currIdx, N);
            if (this.items[currIdx] > this.items[minChildIdx]) {
                swap(this.items, currIdx, minChildIdx);
                this.heapifyDown(minChildIdx, N);
            }
        }
    }

    heapifyDown2(currIdx, N) {
        // If the current is not a leaf
        if (2*currIdx+1 < N) {
            let minChildIdx = this.minChild(currIdx);
            if (this.items[currIdx] > this.items[minChildIdx]) {
                swap(this.items, currIdx, minChildIdx);
                this.heapifyDown2(minChildIdx, N);
            }
        }
    }

    parentIdx(currIdx) {
        return Math.floor((currIdx-1)/2);
    }

    hasAChild(currIdx, N) {
        return 2*currIdx+1 < N;
    }

    minChild(currIdx, N) {
        let min = 2*currIdx+1;
        // If has right child
        if (min+1 < N) {
            // If the right child is smaller than the left child
            if (this.items[min+1] < this.items[min]) {
                min = min + 1;
            }
        }
        return min;
    }

    async reverse(speed) {
        let i = 0;
        let j = this.items.length-1;
        while(i < j) {
            swap(this.items, i, j);
            i++; j--;
            await delay(speed);
        }
    }
}