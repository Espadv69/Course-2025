package MathFiles;

public class Media {

  public static void main(String[] args) {
    float nota1 = 5.25f;
    float nota2 = 7.85f;
    float nota3 = 3.40f;

    float media = (nota1 + nota2 + nota3) / 3;
    float extraPoint = media + 1;

    System.out.println("La nota media es: " + media);
    System.out.println("La nota media más el punto extra por el trabajo es: " + extraPoint);
  }

}
