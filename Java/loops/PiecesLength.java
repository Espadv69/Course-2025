package loops;

import java.util.Scanner;

public class PiecesLength {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.println("Enter the number of pieces to process:");
    int pieces = sc.nextInt();

    if (pieces < 1 || pieces > 100) {
      System.out.println("The number of pieces is not valid!");
      sc.close();
      return;
    }

    while (pieces > 0) {
      System.out.println("Enter the length of the piece:");
      float length = sc.nextFloat();

      if (length < 1.0) {
        System.out.println("The piece is too small!");
      } else if (length > 2.0) {
        System.out.println("The piece is too large!");
      } else {
        System.out.println("The piece is accepted!");
      }

      pieces--;
    }
    System.out.println("Processing is complete!");

    sc.close();
  }

}
