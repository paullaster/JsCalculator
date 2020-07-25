function calc() {
    
   var input = Number(prompt("Enter the first value here"));
   var val =Number(prompt("enter the second value here"));
   var operation = prompt("Enter the operation to perform");
    switch (operation){
        case '*' :
    //multiplication
    for(var n =input; input<13;){
        for(var m=val; val<13;){
           alert(m +"    multiplied by " + n + " is : " + n*m);
        }
    }
    break;
    
    case '+' :
        //addition
    for(var i =input; i<13;){
        for(var j=val; j<13;){
            alert(j +"    added " + i + " is : " + (i+j));
        }
    }
    break;
    
    case '-':
    //subtraction
    for(var k =input; k<13;){
        for(var l=val; l<13;){
            alert(l +"    subtracted  " + k + " is : " + (l-k));
        }
    }
    break;
    
    case '/':
    //division
    for(var a =input; input<13;){
        for(var b=val; b<13;){
          var  res =a/b;
            
          alert(b +"   divided by " + a + " is : " + res.toPrecision(4));
        }
    }
    break;
    
    default:
        alert("Entered value is out of scope, Kindly try to input another set of numbers.");
       calc();
    
    }
    
}
calc();
calc.close();



