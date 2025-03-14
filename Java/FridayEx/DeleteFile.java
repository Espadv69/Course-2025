package FridayEx;

import java.io.File;

public class DeleteFile {

  public static void main(String[] args) {
    String path = "C:\\Users\\Public\\test.txt";
    File file = new File(path);

    if (file.exists()) {
      file.delete();
      System.out.println("El archivo ha sido eliminado.");
    } else {
      System.out.println("El archivo no existe.");
    }
  }

}
