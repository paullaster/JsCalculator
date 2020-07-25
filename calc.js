function calc() {
    
    var input = Number(prompt("Enter the first value here"));
      var val =Number(prompt("enter the second value here"));
    var operation = prompt("Enter the operation to perform");
     switch (operation){
         case '*' :
     //multiplication
     var n =input;
         var m=val; 
            alert(m +"    multiplied by " + n + " is : " + n*m);
     break;
     
     case '+' :
         //addition
     var i =input; 
         var j=val; 
             alert(j +"    added " + i + " is : " + (i+j));
     break;
     
     case '-':
     //subtraction
     var k =input; 
         var l=val; 
             alert(l +"    subtracted  " + k + " is : " + (l-k));
     break;
     
     case '/':
     //division
     var a =input; 
         var b=val; 
           var  res =a/b;
             
           alert(b +"   divided by " + a + " is : " + res.toPrecision(4));
     break;
     
     default:
         alert("Entered value is out of scope, Kindly try to input another set of numbers.");
        calc();
     
     }
     
 }
 calc();
 
 