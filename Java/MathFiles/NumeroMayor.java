package MathFiles;

import java.util.Scanner;

public class NumeroMayor {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.println("Ingrese el primer número; ");
    int num1 = sc.nextInt();

    System.out.println("Ingrese el segundo número; ");
    int num2 = sc.nextInt();

    int numMayor = Math.max(num1, num2);
    int numMin = Math.min(num1, num2);

    if (num1 == num2) {
      System.out.println("Los números son iguales");
    } else {
      System.out.println("El número mayor es: " + numMayor);
      System.out.println("El número menor es: " + numMin);
    }

    sc.close();
  }

}
