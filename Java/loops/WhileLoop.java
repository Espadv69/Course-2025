package loops;

public class WhileLoop {

  public static void main(String[] args) {
    int i = 1;
    while (i <= 5) {
      System.out.println("i while: " + i);
      i++;
    }

    int j = 10;
    while (j >= 1) {
      System.out.println("j while: " + j);
      j--;
    }

    int k = 1;
    while (k <= 10) {
      if (k % 2 == 0) {
        System.out.println("k while even: " + k);
      }
      k++;
    }
  }

}
