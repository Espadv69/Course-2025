import java.util.Scanner;

public class Promedio {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.println("Ingrese el nombre del estudiante: ");
    String nombre = sc.nextLine();

    System.out.println("Ingrese la nota 1: ");
    double nota1 = sc.nextDouble();

    System.out.println("Ingrese la nota 2: ");
    double nota2 = sc.nextDouble();

    System.out.println("Ingrese la nota 3: ");
    double nota3 = sc.nextDouble();

    double promedio = (nota1 + nota2 + nota3) / 3;

    if (promedio >= 7) {
      System.out.println("El estudiante " + nombre + " ha aprobado con un promedio de " + promedio);
    } else if (promedio >= 4 && promedio < 7) {
      System.out.println("El estudiante " + nombre + " ha ido regular con un promedio de " + promedio);
    } else {
      System.out.println("El estudiante " + nombre + " ha reprobado con un promedio de " + String.format("%.2f", promedio) + " y debe recursar");
    }

    sc.close();
  }

}
