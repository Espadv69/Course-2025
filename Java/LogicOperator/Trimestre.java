package LogicOperator;

import java.util.Scanner;

public class Trimestre {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.println("Ingrese el número de dia: ");
    int day = sc.nextInt();

    System.out.println("Ingrese el número de mes: ");
    int month = sc.nextInt();

    System.out.println("Ingrese el número de año: ");
    int year = sc.nextInt();

    if (day < 1 || day > 31 || month < 1 || month > 12) {
      System.out.println("La fecha ingresada no es válida.");
    } else {
      if (month == 1 || month == 2 || month == 3) {
        System.out.println("El día " + day + " del mes " + month + " del año " + year + " pertenece al primer trimestre.");
        sc.close();
        return;
      }

      System.out.println("El día " + day + " del mes " + month + " del año " + year + " no pertenece al primer trimestre.");
    }

    sc.close();
  }

}
