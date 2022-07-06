const arr = [1, 2, 3, 4, 5, 6, 7, 8];
Array.prototype.even = function() {
    return this.filter((ele) => ele % 2 === 0);
}
console.log(arr.even());

Array.prototype.odd = function() {
    return this.filter((ele) => ele % 2 !== 0);
}
console.log(arr.odd());