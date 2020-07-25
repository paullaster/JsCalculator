Number.prototype.isEven = function(){
    return this%2 ===0;
}
Number.prototype.isOdd = function(){
    return this%2 ===1;
}
console.log(42..isEven());
console.log(3..isOdd());