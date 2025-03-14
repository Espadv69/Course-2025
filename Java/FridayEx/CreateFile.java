package FridayEx;

import java.io.File;

public class CreateFile {

  public static void main(String[] args) {
    String path = "C:\\Users\\Public\\test.txt";
    File file = new File(path);

    if (file.exists()) {
      System.out.println("El archivo ya existe.");
      return;
    } else {
      try {
        file.createNewFile();
        System.out.println("El archivo ha sido creado.");
      } catch (Exception e) {
        e.getStackTrace();
      }
    }
  }

}
