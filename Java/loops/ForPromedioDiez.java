package loops;

import java.util.Scanner;

public class ForPromedioDiez {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int total = 0;
    int promedio = 0;

    for (int i = 1; i <= 10; i++) {
      System.out.println("Enter a number between 0 and 10: ");
      int number = sc.nextInt();

      if (number < 0 || number > 10) {
        System.out.println("Invalid number entered");
        i--;
        continue;
      }

      total += number;
    }

    promedio = total / 10;
    System.out.println("The total is: " + total);
    System.out.println("The average is: " + promedio);

    sc.close();
  }

}
