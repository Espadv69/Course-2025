package loops;

import java.util.Scanner;

public class DoWhileLoop {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.println("Enter a number: ");
    int i = sc.nextInt();
    if (i > 999) {
      System.out.println("Number is too large!");
      System.exit(0);
    }

    int counter = 1;

    do {
      System.out.println(counter);
      counter++;
    } while (counter <= i);

    sc.close();
  }

}
