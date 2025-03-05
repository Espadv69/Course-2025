public class Tutorial {

  public static void main(String[] args) {
    System.out.println("Hello, World!");
    int x = 1;
    int y = 10;
    while (x <= y) {
      System.out.println(x);
      x++;
    }

    for (x = 1; x <= y; x++) {
      System.out.println("x = " + x);
    }
  }

}