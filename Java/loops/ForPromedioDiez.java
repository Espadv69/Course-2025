package loops;

import java.util.Scanner;

public class ForPromedioDiez {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int total = 0;
    int promedio = 0;

    for (int i = 1; i <= 10; i++) {
      System.out.println("Enter a number: ");
      int number = sc.nextInt();
      total += number;
    }

    promedio = total / 10;
    System.out.println("The total is: " + total);
    System.out.println("The average is: " + promedio);

    sc.close();
  }

}
