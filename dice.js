var Dice = {
    sides:6,
    roll: function(){
        return Math.floor(6*Math.random())+1;
    }
}
console.log(Dice.roll());
