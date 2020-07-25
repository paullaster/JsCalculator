import java.swing.*;
public class Calculator extends Thread{
    public void compute(){
        int firstNumber;
    int secondNumber;
    int operand;
    nextInt("Enter option for addition, 2 for subtraction and 3 for multiplication " +operand);
    switch(operand){
        case 1:
         public addition(int firstNum, int secondNum){
        nextInt("Enter the first number /n " +firstNum);
       System.out.println( firstNumber = firstNum);
        nextInt("Enter the first number /n " +secondNum);
       System.out.println(secondNumber = secondNum);
       int sumOf = firstNumber + secondNumber;
       System.out.println("The sum of " +firstNumber + " and " +secondNumber+ " is " +sumOf ); 
        
    }
    break;
    case 2:
         public difference(int firstNum, int secondNum){
        nextInt("Enter the first number /n " +firstNum);
       System.out.println( firstNumber = firstNum);
        nextInt("Enter the first number /n " +secondNum);
       System.out.println(secondNumber = secondNum);
       int differenceOf = firstNumber - secondNumber;
       System.out.println("The sum of " +firstNumber + " and " +secondNumber+ " is " +differenceOf ); 
        
    }
    break;
    case 3:
         public multiply(int firstNum, int secondNum){
        nextInt("Enter the first number /n " +firstNum);
       System.out.println( firstNumber = firstNum);
        nextInt("Enter the first number /n " +secondNum);
       System.out.println(secondNumber = secondNum);
       int productOf = firstNumber * secondNumber;
       System.out.println("The sum of " +firstNumber + " and " +secondNumber+ " is " +productOf ); 
        
    }

    }
    }
    
    // public void run(){

    // }
   public void main(String [args]){
       Calculator calc1 = new Calculator();
       calc1.start();
        calc1.compute();
   }
   
   
}