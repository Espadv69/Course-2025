package LogicOperator;

import java.util.Scanner;

public class MenorDeDiez {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.println("Digite el primer número: ");
    int num1 = sc.nextInt();

    System.out.println("Digite el segundo número: ");
    int num2 = sc.nextInt();

    System.out.println("Digite el tercer número: ");
    int num3 = sc.nextInt();

    if (num1 < 10 && num2 < 10 && num3 < 10) {
      System.out.println("Todos los números son menores a 10");
    } else {
      System.out.println("Alguno de los números es mayor o igual a 10");
    }

    sc.close();
  }

}
