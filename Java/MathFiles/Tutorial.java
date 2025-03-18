package MathFiles;

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

    x = 1;

    do {
      System.out.println("do while x = " + x);
      x++;
    } while (x <= y);

    int[] numbers = { 1, 2, 3, 4, 5 };
    for (int i = 0; i < numbers.length; i++) {
      System.out.println("numbers[" + i + "] = " + numbers[i]);
    }

    for (int number : numbers) {
      System.out.println("number = " + number);
    }

    String[] names = { "Aitor", "Ane", "Amaia", "Ainhoa" };
    for (int i = 0; i < names.length; i++) {
      System.out.println("names[" + i + "] = " + names[i]);
    }
  }

}