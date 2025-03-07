
public class Math_operations {

	public static void main(String[] args) {
		
		// Retorna el valor máximo entre dos valores.
		System.out.println("Número máximo: " + Math.max(100, 10));
		
		// Retorna el valor mínimo entre dos valores.
		System.out.println("Número máximo: " + Math.min(100, 10));
		
		// Retorna un número negativo convertido en positivo.
		System.out.println("Convertir a positivo: " + Math.abs(-5.2));
		
		// Retorna un número aleatorio.
		System.out.println("Número aleatorio: " + Math.random());
		
		// Crear variable, castear a int y dejarlo hasta 100.
		int random = (int)(Math.random()* 101);
		System.out.println("Número aleatorio integer hasta 100: " + random);

	}

}
