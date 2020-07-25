public class Series implements Runnable{
    public void display(){
         for(int i=1; i<=50; i++){
             if(i=25){
                Thread.sleep(10);
            }
            else{
                System.out.println(i + "/n");
            }
        }
        for(int r =0; r<=50; r++) {
            System.out.println("Rehema Makola /n");
        }
    }
    // public void run(){
       
    // }
    public void main(String args[]){
        Series s1 = new Series();
        s1.start();
        s1.display();
    }
    
}