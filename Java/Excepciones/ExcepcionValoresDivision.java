package Excepciones;

import java.util.InputMismatchException;
import java.util.Scanner;

public class ExcepcionValoresDivision {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    boolean error;

    do {
      try {
        error = false;
        System.out.println("Introduce el dividendo: ");
        int dividendo = sc.nextInt();

        System.out.println("Introduce el divisor: ");
        int divisor = sc.nextInt();

        int resultado = dividendo / divisor;
        System.out.println("El resultado de la división es: " + resultado);
      } catch (InputMismatchException exception) {
        System.err.println("InputMismatchError: " + exception.getMessage());
        error = true;
      } catch (ArithmeticException exception) {
        System.err.println("ArithmeticError: " + exception.getMessage());
        error = true;
      } finally {
        System.out.println("Operación finalizada.");
        System.out.println("-------------------------------");
      }
    } while (error);

    sc.close();
  }

}
