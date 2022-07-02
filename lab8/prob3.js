Array.prototype.mySort = function() {
    for(let i = 0; i < this.length; i++) {
        for(let j = i + 1; j < this.length; j++) {
            if (this[i] > this[j]) {
                let temp = this[i];
                this[i] = this[j];
                this[j] = temp;
            }
        }
    }
    return this;
}
console.log([7, 5, 2, 4, 3, 9].mySort());