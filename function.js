// function love(male, female){
//     return male + " loves " + female;
// }

// var hubby = prompt("enter hubby's name\t");
// var darling = prompt("enter darling's name\t");
// alert(love(hubby.toUpperCase(), darling.toUpperCase()));
function square(y){
   return y*y;
}

//console.log(square(4000000));
var squares = [1,3,5,7,9];
var sumOfSquares =squares.map(square).reduce(function(total,results){
    return total+results;
});
console.log("this is the sum of squares of odd numbers between 0 and 10: "+ sumOfSquares);