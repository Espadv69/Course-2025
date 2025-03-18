package MathFiles;

import java.util.Scanner;

public class Tienda {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.println("Add the price of the product");
    double price = sc.nextDouble();

    System.out.println("Add the quantity of the product");
    int quantity = sc.nextInt();

    double total = price * quantity;
    System.out.println("The total is: " + total);

    sc.close();
  }
}
