package loops;

import java.util.Scanner;

public class ForTutorial {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.println("Enter a number between 1 and 100: ");
    int numbers = sc.nextInt();

    if (numbers < 1 || numbers > 100) {
      System.out.println("Invalid number");
      System.exit(0);
    }

    System.out.println("---------------------------------");

    forLoop(numbers);
    System.out.println("---------------------------------");
    forLoopEven(numbers);

    sc.close();
  }

  public static void forLoop(int numbers) {
    for (int i = 1; i <= numbers; i++) {
      System.out.println(i);
    }
  }

  public static void forLoopEven(int numbers) {
    for (int i = 1; i <= numbers; i++) {
      if (i % 2 == 0) {
        System.out.println("Even " + i);
      }
    }
  }

}
