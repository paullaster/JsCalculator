var wonderWoman = {
    name: "Wonder Woman",
    realName: "Dianna Prince",
    height: 72,
    weight: 165,
    hero: true,
    allies:["Wonder girl", "Donna Troy", "superman"],
    allos: function(){
     console.log("say your name");
    }
}

console.log(JSON.stringify(wonderWoman));
console.log(Math.LOG10E);
console.log(Math.exp(3));
console.log(Math.pow(9,10));
console.log(Math.sqrt(25));//return the positive square root of a number.
console.log(Math.log(10));
console.log(Math.max(20,-20,19.98989,20.1,20.00,20.00001,19.999,));
console.log(Math.sin(40));
console.log(Math.asin(0.7451131604793488));
console.log(Math.random());
console.log(10*Math.random(3));
today = new Date()
console.log(today);
christmas= new Date('2020 12 25');
console.log(christmas);
var a = new Date();
console.log(a.setMonth(10));
var pattern = /.*ing/;
console.log(pattern.test("joking"));
console.log(pattern.exec("catering"));
var regPattern = /[Pp][aeiou]ull[aeiou]/;
console.log(regPattern.test("Paullaster"));
var namePattern = /paul/i;
var result= console.log(namePattern.test("Paullaster"));
if(result===true){
console.log("laster");
}
else{
    console.log("okoth");
}
var regularPatter = /P[aeiou]+\w*ing/;
console.log(regularPatter.test("Pulling"));
var checkPdf = /.*.[pdfPDF]$/;
console.log(checkPdf.test("resume.PDF"));