public class Sueldo {
  
  public static void main(String[] args) {
    int sueldo = 1000;
		int gasto1 = 234;
		float gasto2 = 34.45f;
		float gasto3 = 12.99f;
		
		float sueldoRestante = sueldo - (gasto1 + gasto2 + gasto3);
		
		System.out.println("El sueldo restante es: " + sueldoRestante);
  }

}
