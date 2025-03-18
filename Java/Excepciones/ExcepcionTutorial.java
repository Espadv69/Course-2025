package Excepciones;

import java.util.InputMismatchException;
import java.util.Scanner;

public class ExcepcionTutorial {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    boolean continuar;

    do {
      try {
        continuar = false;
        System.out.println("Ingrese un valor entero: ");
        int valor = sc.nextInt();

        int cuadrado = valor * valor;
        System.out.println("El cuadrado de " + valor + " es " + cuadrado);
      } catch (InputMismatchException ex) {
        System.err.println("Error: " + ex.getMessage());
        System.out.println("Por favor, ingrese un valor entero.");
        sc.nextLine();
        continuar = true;
      }
    } while (continuar);

    sc.close();
  }

}
