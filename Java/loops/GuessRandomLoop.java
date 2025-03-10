package loops;

import java.util.Scanner;

public class GuessRandomLoop {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    // Guess a number between 1 to 100
    int number = (int) (Math.random() * 100) + 1;
    int guess = 0;

    System.out.println("Guess a number between 1 to 100");

    while (guess != number) {
      guess = sc.nextInt();

      if (guess == number) {
        System.out.println("Congratulations! You guessed the number");
      } else if (guess < number) {
        System.out.println("Try a higher number");
      } else {
        System.out.println("Try a lower number");
      }

      sc.close();
    }

    sc.close();
  }

}
