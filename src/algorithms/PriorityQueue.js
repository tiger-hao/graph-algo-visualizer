const top = 1;
const parent = i => i >> 1;
const left = i => i << 1;
const right = i => (i << 1) + 1;

export class PriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    this._heap = [0];
    this._comparator = comparator;
  }

  size() {
    return this._heap.length - 1;
  }

  isEmpty() {
    return this.size() === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this._heap[top].value;
  }

  push(value, priority) {
    const element = { value, priority };
    this._heap.push(element);
    this._siftUp();
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }

    const popped = this._heap[top];
    const bottom = this.size();

    this._swap(top, bottom);
    this._heap.pop();
    this._siftDown();

    return popped;
  }

  _greater(i, j) {
    return this._comparator(this._heap[i].priority, this._heap[j].priority);
  }

  _swap(i, j) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }

  _siftUp() {
    let node = this.size();
    while (node > top && this._greater(node, parent(node))) {
      this._swap(node, parent(node));
      node = parent(node);
    }
  }

  _siftDown() {
    let node = top;
    while (
      (left(node) <= this.size() && this._greater(left(node), node)) ||
      (right(node) <= this.size() && this._greater(right(node), node))
    ) {
      let maxChild = (right(node) <= this.size() && this._greater(right(node), left(node))) ? right(node) : left(node);
      this._swap(node, maxChild);
      node = maxChild;
    }
  }
}
