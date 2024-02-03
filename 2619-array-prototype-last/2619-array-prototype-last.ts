declare global {
    interface Array<T> {
        last(): T | -1;
    }
}

Array.prototype.last = function() {
    const arrLen = this.length
    if (arrLen === 0) {
        return -1
    } else {
        return this[arrLen-1]
    }
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

export {};