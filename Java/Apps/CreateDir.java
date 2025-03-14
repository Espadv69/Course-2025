package Apps;

import java.io.File;

public class CreateDir {

  public static void main(String[] args) {
    String dirName = "C:\\Users\\Mañana\\Documents\\Course-2025\\Java\\Apps\\NewDir";
    File dir = new File(dirName);

    if (dir.exists()) {
      System.out.println("El directorio " + dirName + " ya existe.");
    } else {
      dir.mkdir();
      System.out.println("El directorio " + dirName + " ha sido creado.");
    }
  }

}
