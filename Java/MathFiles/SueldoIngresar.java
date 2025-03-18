package MathFiles;

import java.util.Scanner;

public class SueldoIngresar {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.println("Ingrese sueldo: ");
    double sueldo = sc.nextDouble();

    if (sueldo >= 3000) {
      System.out.println("Debe pagar impuestos");
    } else {
      System.out.println("No debe pagar impuestos");
    }

    sc.close();
  }

}
