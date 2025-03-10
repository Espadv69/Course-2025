package loops;

import java.util.Scanner;

public class PiecesLength {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.println("Enter the number of pieces to be processed;");
    int pieces = sc.nextInt();
    sc.nextLine();

    float length;

    while (pieces > 0) {
      System.out.println("Enter the length of the piece:");
      length = sc.nextFloat();

      if (length >= 1.0 && length <= 2.0) {
        System.out.println("The piece is in the correct length.");
      } else {
        System.out.println("The piece is not in the correct length.");
      }

      pieces--;
    }

    System.out.println("Processing is complete!");

    sc.close();
  }

}
