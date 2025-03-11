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

      if (counter >= 100) {
        System.out.println("The number: " + counter + " has 3 digits.");
      } else if (counter >= 10) {
        System.out.println("The number: " + counter + " has 2 digits.");
      } else {
        System.out.println("The number: " + counter + " has 1 digit.");
      }

      counter++;
    } while (counter <= i);

    sc.close();
  }

}
