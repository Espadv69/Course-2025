import java.util.Scanner;

public class NumeroMayor {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.println("Ingrese el primer número; ");
    int num1 = sc.nextInt();

    System.out.println("Ingrese el segundo número; ");
    int num2 = sc.nextInt();

    if (num1 == num2) {
      System.out.println("Los números son iguales");
    } else if (num1 > num2) {
      System.out.println("El primer número es mayor que el segundo");
    } else {
      System.out.println("El segundo número es mayor que el primero");
    }

    sc.close();
  }

}
