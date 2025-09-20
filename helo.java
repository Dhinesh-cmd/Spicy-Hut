import java.util.*;

class helo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        for(int i = 1; i<=8; i++){
        if(num > 90 && i == 1){
            System.out.println("number is greater than 90");
        }
        else if (num > 80 && i == 2){
            System.out.println("Number is greater than 80");
        }
        else if (num > 70 && i == 3){
            System.out.println("Number is greater than 70");
        }
        else if (num > 60 && i == 4){
            System.out.println("Number is greater than 60");
        }
        else if (num > 50 && i == 5){
            System.out.println("Number is greater than 50");
        }
        else if (num > 40 && i == 6){
            System.out.println("Number is greater than 40");
        }
        else if (num > 30 && i == 7){
            System.out.println("Number is greater than 30");
        }
        else if (num > 20 && i == 8){
            System.out.println("Number is greater than 20");
        }

        else{
            System.out.println("Number is less than 20");
        }
    
        }
    }
}
