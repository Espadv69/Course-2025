package loops;

import java.util.Scanner;

public class ForMultiplyTable {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.println("Enter the number to print the table between 1 to 100");
    int number = sc.nextInt();

    if (number < 0 || number > 100) {
      System.out.println("Please enter a number between 1 to 100");
      System.exit(0);
    }

    System.out.println("---------------------------");

    table(number);
    sc.close();
  }

  public static void table(int number) {
    for (int i = 1; i <= 10; i++) {
      System.out.println(number + " * " + i + " = " + number * i);
    }
  }

}
