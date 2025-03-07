package LogicOperator;

import java.util.Scanner;

public class Navidad {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.println("Ingrese el número de dia: ");
    int day = sc.nextInt();

    System.out.println("Ingrese el número de mes: ");
    int month = sc.nextInt();

    if (day == 25 && month == 12) {
      System.out.println("¡Feliz Navidad!");
    } else {
      System.out.println("Hoy no es Navidad.");
    }

    sc.close();
  }

}
