function power(x){
    return function(power){
        return Math.pow(x,power);
    }

}
twoExp = power(2);
console.log(twoExp(15));
tenExp = power(10);
console.log(tenExp(10));

function talk(){
    return "response:"+ "" + this.word;
}
var sentence = {
    word : "yes teacher",
    word : "yes doctor"
}
console.log(talk.call(sentence));