package loops;

import java.util.Scanner;

public class ForTutorial {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    sc.close();
  }

  public static void forLoop(int numbers) {
    for (int i = 1; i <= numbers; i++) {
      System.out.println(i);
    }
  }

}
