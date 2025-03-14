package FridayEx;

import java.util.Scanner;

public class GetValue {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    // sacar positivos, negativos y ceros
    System.out.println("-----Números-----");

    int positivos = 0;
    int negativos = 0;
    int ceros = 0;

    for (int i = 1; i <= 10; i++) {
      System.out.println("Ingrese el número " + i + ": ");
      int num = sc.nextInt();

      if (num > 0) {
        positivos++;
      } else if (num < 0) {
        negativos++;
      } else {
        ceros++;
      }
    }

    System.out.println("\nPositivos: " + positivos);
    System.out.println("Negativos: " + negativos);
    System.out.println("Ceros: " + ceros);

    System.out.println("------------------");

    sc.close();
  }

}
