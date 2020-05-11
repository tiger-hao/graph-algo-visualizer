export class Queue {
  constructor() {
    this._queue = [];
    this._offset = 0;
  }

  getLength() {
    return (this._queue.length - this._offset);
  }

  isEmpty() {
    return (this._queue.length === 0);
  }

  enqueue(item) {
    this._queue.push(item);
  }

  dequeue() {
    if (this._queue.length === 0) {
      return undefined;
    }

    const item = this._queue[this._offset++];

    if (this._offset * 2 >= this._queue.length) {
      this._queue = this._queue.slice(this._offset);
      this._offset = 0;
    }

    return item;
  }

  peek() {
    return (this._queue.length > 0 ? this._queue[this._offset] : undefined);
  }
}
