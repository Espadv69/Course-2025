import java.util.Scanner;

public class Operation {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		System.out.println("Add first value");
		int num1 = sc.nextInt();

		System.out.println("Add second value");
		int num2 = sc.nextInt();

		System.out.println("First value: " + num1 + " Second value: " + num2);

		int sum = num1 + num2;
		int multiply = num1 * num2;
		System.out.println("Sum: " + sum);
		System.out.println("Multiply: " + multiply);

		sc.close();
	}

}
