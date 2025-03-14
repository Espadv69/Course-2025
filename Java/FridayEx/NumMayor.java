package FridayEx;

import java.util.Scanner;

public class NumMayor {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.println("Ingrese el primer número: ");
    int num1 = sc.nextInt();

    System.out.println("Ingrese el segundo número: ");
    int num2 = sc.nextInt();

    System.out.println("Ingrese el tercer número: ");
    int num3 = sc.nextInt();

    if (num1 > num2 && num1 > num3) {
      System.out.println("El número mayor es: " + num1);
    } else if (num2 > num1 && num2 > num3) {
      System.out.println("El número mayor es: " + num2);
    } else {
      System.out.println("El número mayor es: " + num3);
    }

    System.out.println("Ingrese el tercer número: ");

    sc.close();
  }

}
