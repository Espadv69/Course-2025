import java.util.Scanner;

public class OperacionDos {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.println("Ingrese el primer número; ");
    int num1 = sc.nextInt();

    System.out.println("Ingrese el segundo número; ");
    int num2 = sc.nextInt();

    if (num1 > num2) {
      int suma = num1 + num2;
      System.out.println("La suma de los números es: " + suma);

      int diferencia = num1 - num2;
      System.out.println("La diferencia entre los números es: " + diferencia);
    } else {
      int producto = num1 * num2;
      System.out.println("El producto de los números es: " + producto);

      int division = num2 / num1;
      System.out.println("La división entre los números es: " + division);
    }

    sc.close();
  }

}
