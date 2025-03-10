package loops;

import java.util.Scanner;

public class PiecesLength {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.println("Enter the number of pieces to process:");

    while (!sc.hasNextInt()) {
      System.out.println("The number of pieces must be an integer!");
      sc.next();
    }

    int pieces = sc.nextInt();
    sc.nextLine();

    while (pieces > 0) {
      System.out.println("Enter the length of the piece:");

      while (!sc.hasNextDouble()) {
        System.out.println("The length of the piece must be a number!");
        sc.next();
      }

      double length = sc.nextDouble();
      sc.nextLine();

      if (length < 1.0) {
        System.out.println("The length of the piece is too small!");
      } else if (length > 2.0) {
        System.out.println("The length of the piece is too large!");
      } else {
        System.out.println("The piece is accepted!");
      }

      pieces--;
    }
    System.out.println("Processing is complete!");

    sc.close();
  }

}
