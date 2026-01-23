class Segment {
    constructor(index, value) {
        this.index = index;
        this.value = value;
        this.mergeCost = 0;
        this.left = null;
        this.right = null;
    }
}

class MinHeap {
    constructor() {
        this.arr = [];
    }

    compare(a, b) {
        if (!a.right || !b.right) return a.right ? -1 : 1;
        if (a.mergeCost !== b.mergeCost) return a.mergeCost - b.mergeCost;
        return a.index - b.index;
    }

    push(x) {
        this.arr.push(x);
        this.bubbleUp(this.arr.length - 1);
    }

    pop() {
        if (this.arr.length === 1) return this.arr.pop();
        const top = this.arr[0];
        this.arr[0] = this.arr.pop();
        this.bubbleDown(0);
        return top;
    }

    remove(target) {
        const i = this.arr.indexOf(target);
        if (i === -1) return;
        const last = this.arr.pop();
        if (i < this.arr.length) {
            this.arr[i] = last;
            this.bubbleUp(i);
            this.bubbleDown(i);
        }
    }

    bubbleUp(i) {
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (this.compare(this.arr[i], this.arr[p]) >= 0) break;
            [this.arr[i], this.arr[p]] = [this.arr[p], this.arr[i]];
            i = p;
        }
    }

    bubbleDown(i) {
        const n = this.arr.length;
        while (true) {
            let l = i * 2 + 1, r = l + 1, s = i;
            if (l < n && this.compare(this.arr[l], this.arr[s]) < 0) s = l;
            if (r < n && this.compare(this.arr[r], this.arr[s]) < 0) s = r;
            if (s === i) break;
            [this.arr[i], this.arr[s]] = [this.arr[s], this.arr[i]];
            i = s;
        }
    }
}

var minimumPairRemoval = function(nums) {
    const heap = new MinHeap();
    let violations = 0;

    let prev = null;
    for (let i = 0; i < nums.length; i++) {
        const cur = new Segment(i, nums[i]);

        if (prev) {
            if (cur.value < prev.value) violations++;
            prev.right = cur;
            cur.left = prev;
            prev.mergeCost = prev.value + cur.value;
            heap.push(prev);
        }
        prev = cur;
    }
    heap.push(prev);

    let ops = 0;

    while (violations > 0) {
        ops++;
        const best = heap.pop();
        const next = best.right;

        if (next.value < best.value) violations--;

        best.value += next.value;
        best.right = next.right;

        if (next.right) {
            if (next.right.value < next.value) violations--;
            next.right.left = best;
            if (best.value > next.right.value) violations++;
        }

        heap.push(best);

        if (best.left) {
            const p = best.left;
            heap.remove(p);
            p.mergeCost = p.value + best.value;
            heap.push(p);
        }
    }

    return ops;
};