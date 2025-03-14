package FridayEx;

import java.util.Scanner;

public class NotasPromedio {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.println("--------------NOTAS--------------");

    double resultado = 0.0;

    for (int i = 1; i <= 3; i++) {
      System.out.print("Ingrese la nota " + i + ": ");
      double nota = sc.nextDouble();
      if (nota < 0 || nota > 10) {
        System.out.println("Nota inválida");
        i--;
      }

      resultado += nota;
    }

    resultado /= 3;
    System.out.println("El promedio de las notas es: " + resultado);

    System.out.println("---------------------------------");

    sc.close();
  }

}
