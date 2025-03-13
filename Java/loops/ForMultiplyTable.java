package loops;

import java.util.Scanner;

public class ForMultiplyTable {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.println("Enter the number to print the table: ");
    int number = sc.nextInt();
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
