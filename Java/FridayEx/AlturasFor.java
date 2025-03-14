package FridayEx;

import java.util.Scanner;

public class AlturasFor {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.println("Introduce el número de alturas a leer: ");
    int numAlturas = sc.nextInt();

    double promedio = 0;
    System.out.println("-----------ALTURAS-----------");

    for (int i = 1; i <= numAlturas; i++) {
      System.out.println("Introduce la altura " + i + ": ");
      double altura = sc.nextDouble();
      promedio += altura;
    }

    promedio /= numAlturas;
    System.out.println("El promedio de las alturas es: " + promedio);

    System.out.println("-----------------------------");

    sc.close();
  }

}
