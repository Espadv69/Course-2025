package MathFiles;

import java.util.Scanner;

public class Perimeter {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		System.out.println("Add side size");
		int side = sc.nextInt();

		int perimeter = side * 4;
		System.out.println("The perimeter is: " + perimeter);

		sc.close();
	}

}
