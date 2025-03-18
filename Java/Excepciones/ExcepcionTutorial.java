package Excepciones;

import java.util.Scanner;

public class ExcepcionTutorial {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.println("Ingrese un valor entero: ");
    int valor = sc.nextInt();

    int cuadrado = valor * valor;
    System.out.println("El cuadrado de " + valor + " es " + cuadrado);

    sc.close();
  }

}
