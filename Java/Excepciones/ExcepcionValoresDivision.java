package Excepciones;

import java.util.InputMismatchException;
import java.util.Scanner;

public class ExcepcionValoresDivision {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    try {

      System.out.println("Introduce el dividendo: ");
      int dividendo = sc.nextInt();

      System.out.println("Introduce el divisor: ");
      int divisor = sc.nextInt();

      int resultado = dividendo / divisor;
      System.out.println("El resultado de la división es: " + resultado);

    } catch (InputMismatchException exception) {
      System.err.println("InputMismatchError: " + exception.getMessage());
    } catch (ArithmeticException exception) {
      System.err.println("ArithmeticError: " + exception.getMessage());
    } finally {
      System.out.println("Operación finalizada.");
    }

    sc.close();
  }

}
